import SkillsMobile from "./skills-mobile";
import SkillsWeb from "./skills-web";
import SkillsGeneral from "./skills-general";

export default function Skills() {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <SkillsMobile />
        <SkillsWeb />
        <SkillsGeneral />
      </div>
    </section>
  );
}
