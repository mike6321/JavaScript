public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello JAVA");
    }
}
/**
/Library/JAVA/JavaVirtualMachines/jdk1.8.0_281.jdk/Contents/Home/bin
/Library/JAVA/JavaVirtualMachines/jdk-13.0.2.jdk/Contents/Home/bin

(13 -> 8) X
/Library/JAVA/JavaVirtualMachines/jdk-13.0.2.jdk/Contents/Home/bin/javac Hello.java
/Library/JAVA/JavaVirtualMachines/jdk1.8.0_281.jdk/Contents/Home/bin/java Hello 


(8 -> 13) O
/Library/JAVA/JavaVirtualMachines/jdk1.8.0_281.jdk/Contents/Home/bin/javac Hello.java
/Library/JAVA/JavaVirtualMachines/jdk-13.0.2.jdk/Contents/Home/bin/java Hello

JAVA COMPILE OPTION

상위버전에서 하위버전은 호환이 안되기때문에 옵션을 써야한다.

Error: A JNI error has occurred, please check your installation and try again
Exception in thread "main" java.lang.UnsupportedClassVersionError: 
Hello has been compiled by a more recent version of the Java Runtime (class file version 57.0), this version of the Java Runtime only recognizes class file versions up to 52.0


 */