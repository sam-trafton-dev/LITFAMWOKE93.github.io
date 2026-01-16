import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="text-xs text-muted-foreground tracking-widest">
              ════════════════════════════════════════
            </div>
            <h2 className="text-4xl md:text-5xl font-terminal text-glow">
              [ PERSONNEL FILE ]
            </h2>
            <div className="text-xs text-muted-foreground tracking-widest">
              CLEARANCE: PUBLIC // ACCESS: GRANTED
            </div>
            <div className="text-xs text-muted-foreground tracking-widest">
              ════════════════════════════════════════
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar with terminal frame */}
            <div className="relative">
              <div className="border-2 border-primary/50 p-1 border-glow">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 rounded-none">
                  <AvatarImage
                    src="/img/Profile_pic_resize.jpg"
                    alt="Sam Trafton"
                    className="rounded-none"
                  />
                  <AvatarFallback className="rounded-none bg-card font-terminal text-2xl">ST</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-2 left-0 right-0 text-center">
                <span className="text-xs bg-background px-2 text-primary">ID_VERIFIED</span>
              </div>
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
              {/* Data Entry 1 */}
              <div className="border border-border p-4 bg-card/30">
                <div className="data-label mb-2">&gt; DESIGNATION</div>
                <h3 className="text-2xl font-terminal text-primary mb-3">TRAFTON, SAM</h3>
                
                <div className="data-label mb-2">&gt; EXPERIENCE_LOG</div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  1 YEAR TECHNICAL SOLUTIONS SPECIALIST // FLUTTER+C#+FIREBASE<br></br>
                  0.4 YEAR SOFTWARE ENGINEERING INTERN // GO+YARNSPINNER+EBITENGINE<br></br>
                  0.4 YEAR SOFTWARE ENGINEERING INTERN // C#+UNITY<br></br>
                  13 YEARS PHYSICAL CONSTRUCTION // RESIDENTIAL.COMMERCIAL.INDUSTRIAL // SEMICONDUCTOR FABRICATION
                  SPECIALIZATION: WELDING // TOOLS: MILWAUKEE.DEWALT.ALL_POWER_EQUIPMENT
                </p>
              </div>

              <div className="ascii-separator" />

              {/* Data Entry 2 */}
              <div className="border border-border p-4 bg-card/30">
                <div className="data-label mb-2">&gt; CURRENT_DIRECTIVE</div>
                <h3 className="text-xl font-terminal text-primary mb-3">DIGITAL_PRODUCT_DEVELOPMENT</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  EDUCATION: BS_COMPUTER_SCIENCE // CSU_GLOBAL<br/>
                  COURSEWORK: AI.MACHINE_LEARNING.DSA.OOP.MOBILE_DEV<br/><br/>
                  OBJECTIVE: FULL_STACK_ENGINEER<br/>
                  STATUS: SEEKING_MS_COMPUTER_SCIENCE<br/>
                  FUTURE: MS_ROBOTICS_ENGINEERING<br/><br/>
                  NOTE: NOMADIC_LIFESTYLE
                </p>
              </div>

              <div className="ascii-separator" />

              {/* Data Entry 3 */}
              <div className="border border-border p-4 bg-card/30">
                <div className="data-label mb-2">&gt; PHILOSOPHY_QUERY</div>
                <h3 className="text-lg font-terminal text-primary mb-3">
                  "WHY_APPLY: DATA_SCI.WEB_DEV.FULLSTACK.IT?"
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  REFERENCED_QUOTE FROM{" "}
                  <ComicBubble quote="A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.">
                    <span className="text-primary underline cursor-pointer hover:text-glow">[HEINLEIN_R.A]</span>
                  </ComicBubble>
                  <br/><br/>
                  ANALYSIS: SPECIALIZATION_FOR_INSECTS // HUMAN_EXPERIENCE_REQUIRES_DIVERSITY<br/>
                  CONCLUSION: SEEK_ALL_OPPORTUNITIES // EXPAND_KNOWLEDGE_BASE<br/><br/>
                  CORE_IDENTITY: PROBLEM_SOLVER + CREATIVE_HEART
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4">
                <div className="data-label mb-3">&gt; CLASSIFICATION_TAGS</div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="secondary">CERTIFIED_SCRAPPER</Badge>
                  <Badge variant="secondary">PROBLEM_SOLVER</Badge>
                  <Badge variant="secondary">CONTINUOUS_LEARNER</Badge>
                  <Badge variant="secondary">FULLSTACK_ASPIRANT</Badge>
                  <Badge variant="secondary">MUAY_THAI_ENTHUSIAST</Badge>
                  <Badge variant="secondary">INDIE_GAME_DREAMER</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground tracking-widest">
            ════════════════════════════════════════<br/>
            [ END_OF_FILE ]
          </div>
        </div>
      </div>
    </section>
  )
}

