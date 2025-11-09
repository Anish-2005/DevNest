export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: Feature[]
  cta: string
  highlight: boolean
}

export interface Feature {
  name: string
  included: boolean
}

export interface RoadmapModule {
  title: string
  duration: string
  topics: string[]
  project: string
}

export interface Roadmap {
  id: string
  name: string
  description: string
  duration: string
  modules: RoadmapModule[]
}
