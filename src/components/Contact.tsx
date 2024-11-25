import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <div className="flex items-center gap-2 mb-8">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Get in Touch</h2>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:frankmuthomi30@gmail.com" className="hover:text-primary transition-colors">
                      frankmuthomi30@gmail.com
                    </a>
                  </div>
                  <p className="text-muted-foreground">
                    Feel free to reach out for collaborations or just a friendly chat about technology and development.
                  </p>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}