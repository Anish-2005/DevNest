import { Ghost, Skull, Flame } from "lucide-react"

export const plans = [
  {
    name: "Lost Soul",
    icon: Ghost,
    price: "Free",
    period: "Forever",
    description: "For wanderers testing the waters of darkness",
    features: [
      { name: "5 basic courses", included: true },
      { name: "Community access", included: true },
      { name: "Code playground", included: true },
      { name: "Basic projects", included: true },
      { name: "Mentor support", included: false },
      { name: "Certificate", included: false },
      { name: "Job board access", included: false },
      { name: "Advanced courses", included: false }
    ],
    cta: "Enter Free",
    highlight: false
  },
  {
    name: "Trapped Developer",
    icon: Skull,
    price: "$29",
    period: "per month",
    description: "For souls committed to escaping the void",
    features: [
      { name: "All courses & roadmaps", included: true },
      { name: "Community & forums", included: true },
      { name: "Full IDE access", included: true },
      { name: "All projects", included: true },
      { name: "1-on-1 mentor sessions", included: true },
      { name: "Completion certificates", included: true },
      { name: "Job board access", included: true },
      { name: "Priority support", included: false }
    ],
    cta: "Start Escaping",
    highlight: true
  },
  {
    name: "Shadow Master",
    icon: Flame,
    price: "$99",
    period: "per month",
    description: "For those who've conquered the darkness",
    features: [
      { name: "Everything in Trapped", included: true },
      { name: "Unlimited mentor sessions", included: true },
      { name: "Private community", included: true },
      { name: "Career coaching", included: true },
      { name: "Interview prep", included: true },
      { name: "Lifetime access", included: true },
      { name: "Custom learning paths", included: true },
      { name: "Priority support 24/7", included: true }
    ],
    cta: "Achieve Mastery",
    highlight: false
  }
]

export default plans
