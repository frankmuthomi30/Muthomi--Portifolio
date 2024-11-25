import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Enumerator",
    company: "Ministry of Labour, Department of Social Protection",
    points: [
      "Conducted comprehensive data collection visits in vulnerable households as part of a national social protection initiative.",
      "Accurately recorded household demographics, income levels, and socio-economic conditions.",
      "Maintained strict confidentiality and professionalism, handling sensitive data.",
      "Provided daily reports on progress, challenges, and insights to field supervisors."
    ]
  },
  {
    title: "Data Entry Clerk",
    company: "Nyeri Town Constituency",
    points: [
      "Achieved 99.9% data accuracy in Excel spreadsheets, surpassing department average",
      "Processed and verified over 5,000 records for constituency database",
      "Implemented new filing system, reducing document retrieval time by 30%"
    ]
  },
  {
    title: "ICT Clerk",
    company: "Independent Electoral and Boundaries Commission (IEBC)",
    points: [
      "Streamlined voter processing, reducing average wait time by 25%",
      "Verified voter information with 100% accuracy, ensuring data integrity",
      "Collaborated with team to manage polling station serving over 1,000 voters"
    ]
  },
  {
    title: "ICT Attaché",
    company: "Teawasco",
    points: [
      "Optimized customer service processes, reducing query resolution time by 15%",
      "Upgraded and maintained company computers and network configurations",
      "Processed average of 20 customer requests daily, maintaining 99% satisfaction rate"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <p className="text-muted-foreground">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-2 w-2 bg-primary rounded-full mt-2"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}