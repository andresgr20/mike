export class Game {
  private name: string;
  private score: number;
  private passed: boolean;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
    this.passed = false;
  }

  public getName(): string {
    return this.name;
  }

  public getPassed(): boolean {
    return this.passed;
  }

  public setPassed(passed: boolean): void {
    this.passed = passed;
  }

  public getScore(): number {
    return this.score;
  }

  public setScore(score: number): void {
    this.score = score;
  }
}
