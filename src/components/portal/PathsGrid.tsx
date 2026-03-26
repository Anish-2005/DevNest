import PathCard from "./PathCard"

export default function PathsGrid({ learningPaths }: { learningPaths: any[] }) {
  return (
    <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {learningPaths.map((path) => (
        <PathCard key={path.id} path={path} />
      ))}
    </div>
  )
}
