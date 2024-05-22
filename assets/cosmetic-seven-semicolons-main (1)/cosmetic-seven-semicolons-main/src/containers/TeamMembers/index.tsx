import TeamMember from "@/components/TeamMemberCards";
import { teamMemberCard } from "@/lib/constData";

const TeamMembers = () => {
    return <TeamMember data={teamMemberCard} />
}
export default TeamMembers