
// tslint:disable-next-line:no-empty-interface
export interface PersionInfor {
    id: number;
    name: string;
    email: string;
    age: number;
    currentRole: string;
    recommend: string;
    likeMostFCC: string;
    skill: SkillFuture;
    comment: string;
}
// tslint:disable-next-line:no-empty-interface
interface SkillFuture {
    id: number;
    name: string;
}
