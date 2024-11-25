"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, CheckCircle2 } from 'lucide-react'

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleDownload = async () => {
    setIsDownloading(true)
    setProgress(0)

    try {
      const response = await fetch('/Frank_Muthomi_CV.pdf')
      if (!response.ok) throw new Error('Network response was not ok')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('Failed to get reader from response')

      const contentLength = +(response.headers.get('Content-Length') ?? '0')
      let receivedLength = 0
      const chunks = []

      while (true) {
        const { done, value } = await reader.read()

        if (done) break

        chunks.push(value)
        receivedLength += value.length

        setProgress(Math.round((receivedLength / contentLength) * 100))
      }

      const blob = new Blob(chunks, { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = 'Frank_Muthomi_Resume.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
      alert('Failed to download the resume. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Download Resume</h2>
      <div className="space-y-4">
        <Button 
          onClick={handleDownload} 
          disabled={isDownloading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
        >
          {isDownloading ? (
            <span className="flex items-center">
              Downloading...
              <motion.div
                className="ml-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Download className="h-5 w-5" />
              </motion.div>
            </span>
          ) : progress === 100 ? (
            <span className="flex items-center">
              Downloaded
              <CheckCircle2 className="ml-2 h-5 w-5" />
            </span>
          ) : (
            <span className="flex items-center">
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </span>
          )}
        </Button>
        {(isDownloading || progress === 100) && (
          <div className="relative pt-1">
            <Progress value={progress} className="h-2 bg-gray-200" />
            <div className="flex items-center justify-end mt-2">
              <span className="text-xs font-semibold inline-block text-primary">
                {progress}%
              </span>
            </div>
          </div>
        )}
      </div>
      {progress === 100 && !isDownloading && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-green-500 mt-4"
        >
          Resume downloaded successfully!
        </motion.p>
      )}
    </div>
  )
}

