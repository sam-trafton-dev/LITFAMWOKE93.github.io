import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ComicBubble } from "@/components/ComicBubble"

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-background scroll-mt-20"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 md:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">My name is Sam</h2>
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
                <h3 className="text-2xl font-semibold mb-4">I have spent 13 years</h3>
                <p className="text-muted-foreground leading-relaxed">
                  learning how to build things in the
                  physical world. If Milwaukee or Dewalt have made a tool then I
                  have used it at some point in my life. I've spent time in
                  residential, commercial, and mostly the industrial construction
                  sector, specifically semiconductor fabrication.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Now I'm focused on building digital products
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  &emsp;I am an engineer at heart, but the formal education was not
                  something within my reach at a young age. After saving up enough money, I enrolled and obtained my Bachelors in Computer Science from CSU Global.
                  While at CSU Global, I took a few courses in AI, Machine Learning, DSA, and Object Oriented Programming. 
                  <br></br>&emsp; I enjoy continuous
                  learning and exposure to advanced subjects. It is my hope to one
                  day be a "full stack" robotics engineer from software to
                  fabrication. Currently seeking a Master's in Computer Science and afterwards intend on attending an engineering school for a Master's in Robotics.
                   <br></br>&emsp;I've never lived in one place for more than a couple of years so it's difficult to attend an in-person university which I would prefer.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  "So, Sam, why are you applying to Data Science, Web Dev, Fullstack, IT?"
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                &emsp;One of my favorite quotes is from{" "}
                  <ComicBubble quote="A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.">
                    Robert A. Heinlein
                  </ComicBubble>
                  , it's a mouthful, but it really speaks to me about the human
                  experience. I could never imagine myself doing one specific thing
                  for the rest of my life. I am looking at any opportunity to expand
                  my knowledge and skillset.
                  <br></br>
                  &emsp;I am a dedicated problem solver wrapped over a creative heart. 
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

