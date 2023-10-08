package zone.yue.jvtc.solution.ooptc.work7.q7;

class Owner {
    public void feedDog(Dog dog) {
        System.out.println("主人喂狗");
        dog.react();
    }
}

class FamilyMember {
    public void feedDog(Dog dog) {
        System.out.println("家人喂狗");
        dog.react();
    }
}

class Stranger {
    public void feedDog(Dog dog) {
        System.out.println("陌生人喂狗");
        dog.react();
    }
}