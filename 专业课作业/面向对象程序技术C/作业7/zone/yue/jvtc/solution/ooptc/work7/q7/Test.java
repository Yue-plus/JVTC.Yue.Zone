package zone.yue.jvtc.solution.ooptc.work7.q7;

public class Test {
    public static void main(String[] args) {
        HappyDog happyDog = new HappyDog();
        NormalDog normalDog = new NormalDog();
        AlertDog alertDog = new AlertDog();
        Owner owner = new Owner();
        FamilyMember familyMember = new FamilyMember();
        Stranger stranger = new Stranger();

        owner.feedDog(happyDog);  // 主人喂狗，狗会很开心地欢跳
        familyMember.feedDog(normalDog);  // 家人喂狗，狗会正常地吃东西
        stranger.feedDog(alertDog);  // 陌生人喂狗，狗会很警惕，并发出叫声
    }
}
