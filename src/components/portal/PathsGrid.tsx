import PathCard from "./PathCard"

export default function PathsGrid({ learningPaths }: { learningPaths: any[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
      {learningPaths.map((path) => (
        <PathCard key={path.id} path={path} />
      ))}
    </div>
  )
}
