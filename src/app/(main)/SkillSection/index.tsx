import { Section } from "@components/Section";
import { Skill }   from "./Skill";

export interface SkillSectionProps {
  isFilled?: boolean;
}

export const SkillSection = ({ isFilled }: SkillSectionProps) => {
  return (
    <Section title="Skills" isFilled={isFilled}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={45} color="sky" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={66} color="red" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={34} color="purple" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={45} color="sky" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={66} color="red" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={34} color="purple" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={45} color="sky" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={66} color="red" />
        <Skill name="Photography" description="I have been taking photos for almost decade, and I have a lot of skills in this sphere" percentage={34} color="purple" />
      </div>
    </Section>
  );
};