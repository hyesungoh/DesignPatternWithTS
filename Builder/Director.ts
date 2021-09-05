import { Builder } from "./Builder";

export class Director {
    private builder: Builder;

    public constructor(builder: Builder) {
        this.builder = builder;
    }

    // 문서 구축
    public construct = (): void => {
        this.builder.makeTitle("안녕하세요"); // 타이틀
        this.builder.makeString("아침과 낮에"); // 문자열
        this.builder.makeItems(["좋은 아침입니다", "안녕하세요"]); // 개별 항목
        this.builder.close(); // 문서 완성
    };
}
