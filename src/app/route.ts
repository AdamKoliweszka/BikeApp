import {LineSegment} from './line-segment';
export class Route {
    private lines : LineSegment[];
    constructor()
    {
        this.lines = [];
    }
    public addSegment(lineSegment : LineSegment) : void
    {
        this.lines.push(lineSegment);
    }
    public getFullDistance() : number{
        let distance = 0;
        for(let lineSegment of this.lines)
        {
            distance += lineSegment.getDistanceInKm();
        }
        return distance;
    }
    public getFullTime() : number{
        let time = 0;
        for(let lineSegment of this.lines)
        {
            time += lineSegment.getTimeOfSegmentInMiliseconds();
        }
        return time;
    }
    public getActualSpeed() : number{
        return this.lines[this.lines.length - 1].getSpeedOnSegment();
    }
    public getLineSegmentes = () => {return this.lines;};
    
}
