import { Directory } from "./Directory";
import { File } from "./File";
import { FileTreatmentException } from "./FileTreatmentException";
import { ListVisitor } from "./ListVisitor";

class Main {
    main() {
        try {
            console.log("Making root entries...");
            const rootdir: Directory = new Directory("root");
            const bindir: Directory = new Directory("bin");
            const tmpdir: Directory = new Directory("tmp");
            const usrdir: Directory = new Directory("usr");
            rootdir.add(bindir);
            rootdir.add(tmpdir);
            rootdir.add(usrdir);
            bindir.add(new File("vi", 10000));
            bindir.add(new File("latex", 20000));
            rootdir.accept(new ListVisitor());

            console.log("\n");
            console.log("Making user entries...");
            const Kim: Directory = new Directory("Kim");
            const Oh: Directory = new Directory("Oh");
            const Park: Directory = new Directory("Park");
            usrdir.add(Kim);
            usrdir.add(Oh);
            usrdir.add(Park);
            Kim.add(new File("diary.html", 100));
            Kim.add(new File("foo.css", 300));
            const Wavy: Directory = new Directory("Wavy");
            Oh.add(Wavy);
            Wavy.add(new File("index.tsx", 100));
            Wavy.add(new File("App.tsx", 500));
            Park.add(new File("game.doc", 10000));
            rootdir.accept(new ListVisitor());
        } catch (error) {
            console.log(error);
        }
    }
}

const m = new Main();
m.main();
