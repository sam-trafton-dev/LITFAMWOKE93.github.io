import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-background scroll-mt-20"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <Separator className="w-24 mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar className="h-32 w-32 md:h-40 md:w-40">
              <AvatarImage
                src="/img/Profile_pic_resize.jpg"
                alt="Sam Trafton"
              />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-4">My name is Sam</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I have spent 13 years learning how to build things in the
                  physical world. If Milwaukee or Dewalt have made a tool then I
                  have used it at some point in my life. I've spent time in
                  residential, commercial, and mostly the industrial construction
                  sector. 
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  But now I want to build digital products
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am an engineer at heart, but the formal education was not
                  something within my reach at a young age. After saving up enough money, I enrolled and obtained my Bachelors in Computer Science from CSU Global.
                  While at CSU Global, I took a few courses in AI, Machine Learning, and Object Oriented Programming. I enjoy continuous
                  learning and exposure to advanced subjects. It is my hope to one
                  day be a "full stack" robotics engineer from software to
                  fabrication. Currently seeking a Master's in Computer Science and afterwards intend on attending an engineering school for a Master's in Robotics.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  "So why are you applying to Data Science, Web Dev, Fullstack?"
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  One of my favorite quotes is from Robert A. Heinlein, it's a
                  mouthful, but it really speaks to me about the human experience.
                  I could never imagine myself doing one specific thing for the
                  rest of my life. I am looking at any opportunity to expand my
                  knowledge and skillset. I am a dedicated problem solver, and the
                  more interesting the problem the more resources, skills, and
                  knowledge I have to acquire.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4">
                <Badge variant="secondary">Certified Scrapper</Badge>
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Continuous Learner</Badge>
                <Badge variant="secondary">Full Stack Aspirant</Badge>
                <Badge variant="secondary">Muay Thai Enthusiast</Badge>
                <Badge variant="secondary">Indie Game Dreamer</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

