export interface TimeValue {
    getMinutesPart() : number;
    getSecondsPart() : number;
    getHoursPart() : number; 
    getTimeInMilisenods() : number;
    getAbsoluteDifferenceInMiliseconds(otherTimeValue: TimeValue) : number;
}
