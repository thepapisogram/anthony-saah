import ThemeIcon from "@/app/components/universal/ThemeIcon";

export default function HomeSection({ icon, type, title, content: ContentComponent }) {
  return (
    <section className="my-10">
        <div className="flex items-center mb-2">
          <ThemeIcon icon={icon} type={type} />
          <h1 className="head-text font-bold text-lg tracking-wide ml-1">{title}</h1>
        </div>
        <ContentComponent />
    </section>
  )
}
