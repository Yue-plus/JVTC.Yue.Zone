package zone.yue.jvtc.solution.ooptc.work7.q7;

public abstract class Dog {
    public abstract void react();
}

class HappyDog extends Dog {
    public void react() {
        System.out.println("狗会很开心地欢跳");
    }
}

class NormalDog extends Dog {
    public void react() {
        System.out.println("狗会正常地吃东西");
    }
}

class AlertDog extends Dog {
    public void react() {
        System.out.println("狗会很警惕，并发出叫声");
    }
}

