import { Rocket, Briefcase, Crown } from "lucide-react"

export const plans = [
  {
    name: "Starter",
    icon: Rocket,
    price: "Free",
    period: "Forever",
    description: "For individuals getting started with structured learning.",
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
    cta: "Start Free",
    highlight: false
  },
  {
    name: "Pro",
    icon: Briefcase,
    price: "$29",
    period: "per month",
    description: "For developers building skills for real projects and interviews.",
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
    cta: "Upgrade to Pro",
    highlight: true
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "$99",
    period: "per month",
    description: "For teams that need advanced coaching and premium support.",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Unlimited mentor sessions", included: true },
      { name: "Private community", included: true },
      { name: "Career coaching", included: true },
      { name: "Interview prep", included: true },
      { name: "Lifetime access", included: true },
      { name: "Custom learning paths", included: true },
      { name: "Priority support 24/7", included: true }
    ],
    cta: "Contact Sales",
    highlight: false
  }
]

export default plans

