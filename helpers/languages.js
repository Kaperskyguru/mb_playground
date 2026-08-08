// Language registry for the MasteringBackend Code Playground.
//
// SEO NOTE (Aug 2026): `id`, `value`, `extension` and `snippet` are execution-critical.
// `id` maps to a Judge0 language ID on the configured RapidAPI instance — do NOT change
// an `id` without confirming it against your own instance first. Run:
//     node scripts/check-judge0-languages.mjs
// to print the real IDs and versions your instance supports.
//
// `runtime` is display/SEO only and is decoupled from execution on purpose, so copy can
// be corrected without risking the compiler mapping.

export const languageOptions = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    displayName: "JavaScript",
    runtime: "Node.js 12.14.0",
    value: "javascript",
    icon: "javascript",
    extension: "js",
    seoTitle:
      "Online JavaScript Playground — Run Node.js Code in Your Browser",
    seoDescription:
      "Free online JavaScript playground. Write, run and test Node.js code instantly in your browser — no install, no signup. Built for backend engineers.",
    intro:
      "This is a free online JavaScript playground built for backend engineers. Write JavaScript, run it against a real Node.js runtime, and see the output immediately — no local install, no configuration, no signup. It is designed for the moment you want to check whether something actually works: a bit of async logic, an array method you half-remember, a quick algorithm sketch before you commit it to a real codebase. The editor supports standard input, so you can test programs that read from stdin the same way they would on a server. Everything runs server-side, so what you see here matches what Node would do in production rather than what a browser console would do. If you are learning backend JavaScript rather than just testing it, the playground pairs with our Node.js projects and courses.",
    faq: [
      {
        q: "Is this JavaScript playground free?",
        a: "Yes. It is free to use and requires no account. Write code, hit run, and you get output.",
      },
      {
        q: "Which Node.js version does it run?",
        a: "Code executes server-side against a Node.js runtime, so language features and standard-library behaviour match a real server environment rather than a browser.",
      },
      {
        q: "Can I pass input to my program?",
        a: "Yes. The playground supports standard input, so programs that read from stdin behave exactly as they would when run from a terminal.",
      },
    ],
    snippet: `
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try masteringbackend.com");`,
  },
  {
    id: 68,
    name: "PHP (7.4.1)",
    label: "PHP (7.4.1)",
    displayName: "PHP",
    runtime: "PHP 7.4.1",
    value: "php",
    icon: "php",
    extension: "php",
    seoTitle: "Online PHP Playground — Run PHP Code in Your Browser, Free",
    seoDescription:
      "Free online PHP playground and compiler. Write, run and test PHP scripts instantly in your browser — no install, no signup. Built for backend engineers.",
    intro:
      "A free online PHP playground for backend engineers who want to test something without spinning up a local stack. Write PHP, run it, and get output in seconds — no XAMPP, no Docker, no signup. It is the fastest way to check the behaviour of a string function you are unsure about, confirm how an array sorts, or sanity-check a snippet before pasting it into a Laravel or Symfony project. Code executes server-side against a real PHP interpreter, so the output reflects genuine runtime behaviour rather than a simulation. Standard input is supported, so scripts that read from stdin work as expected. If you are moving from writing PHP snippets to building real backends with it, the playground sits alongside our backend projects and engineering courses.",
    faq: [
      {
        q: "Do I need to install PHP to use this?",
        a: "No. Everything runs on our servers. You need only a browser.",
      },
      {
        q: "Can I run full PHP scripts or only single expressions?",
        a: "Full scripts. Define classes and functions, include logic across the file, and read from standard input.",
      },
      {
        q: "Is the PHP playground free?",
        a: "Yes, completely free with no account required.",
      },
    ],
    snippet: `
<?php

// Online PHP compiler to run PHP program online
// Print "Try masteringbackend.com" message

echo "Try masteringbackend.com";

?>`,
  },
  {
    id: 60,
    name: "Go (1.13.5)",
    label: "Go (1.13.5)",
    displayName: "Go",
    runtime: "Go 1.13.5",
    value: "go",
    icon: "go",
    extension: "go",
    seoTitle: "Online Go Playground — Run Golang Code in Your Browser",
    seoDescription:
      "Free online Go playground and compiler. Write, run and test Golang code instantly in your browser — no install, no signup. Built for backend engineers.",
    intro:
      "A free online Go playground for backend engineers. Write Golang, compile it, and see the result immediately — no toolchain install, no GOPATH wrangling, no signup. Go is one of the most common languages for backend services, and this playground exists for the quick checks that come up constantly while building them: how a slice behaves when you append past capacity, whether a goroutine and channel pattern deadlocks, what a struct actually marshals to. Code compiles and runs server-side against a real Go compiler, so errors you see here are the errors you would get locally. Standard input is supported for programs that read from stdin. If you are learning Go for backend work rather than just testing snippets, the playground connects to our Go projects and bootcamp track.",
    faq: [
      {
        q: "How is this different from the official Go playground?",
        a: "It works the same way for running code, but sits alongside backend-focused projects, courses and playgrounds for ten other server-side languages.",
      },
      {
        q: "Can I use goroutines and channels?",
        a: "Yes. Concurrency primitives run normally, though programs are subject to an execution time limit.",
      },
      {
        q: "Is the Go playground free?",
        a: "Yes, free with no account required.",
      },
    ],
    snippet: `
// Online Go compiler to run Golang program online
// Print "Try masteringbackend.com" message

package main
import "fmt"

func main() {
  fmt.Println("Try masteringbackend.com")
}
    `,
  },
  {
    id: 74,
    name: "TypeScript (3.7.4)",
    label: "TypeScript (3.7.4)",
    displayName: "TypeScript",
    runtime: "TypeScript 3.7.4",
    value: "typescript",
    extension: "ts",
    icon: "javascript",
    seoTitle: "Online TypeScript Playground — Compile and Run TS in Browser",
    seoDescription:
      "Free online TypeScript playground. Write, compile and run TypeScript code instantly in your browser — no install, no signup. Built for backend engineers.",
    intro:
      "A free online TypeScript playground that actually runs your code rather than only type-checking it. Write TypeScript, compile it, and see real output — no local install, no tsconfig setup, no signup. That distinction matters for backend work: it is one thing to know a type is valid, and another to know the compiled JavaScript behaves the way you expected at runtime. Use it to test a generic you are not sure about, confirm how a union narrows, or check that an async function resolves in the order you think it does. Compilation and execution happen server-side, so you get both compiler errors and runtime output. Standard input is supported. If you are writing TypeScript for NestJS or Node services, the playground pairs with our backend projects and courses.",
    faq: [
      {
        q: "Does this compile TypeScript or just check types?",
        a: "It compiles and then runs the resulting JavaScript, so you see both type errors and real runtime output.",
      },
      {
        q: "Can I use interfaces, generics and decorators?",
        a: "Yes. Standard TypeScript language features are supported.",
      },
      {
        q: "Is the TypeScript playground free?",
        a: "Yes, free with no account required.",
      },
    ],
    snippet: `

// Online TypeScript compiler to run TypeScript program online
// Print "Try masteringbackend.com" message

let message: string = 'Try masteringbackend.com';
console.log(message);

    `,
  },
  {
    id: 73,
    name: "Rust (1.40.0)",
    label: "Rust (1.40.0)",
    displayName: "Rust",
    runtime: "Rust 1.40.0",
    value: "rust",
    icon: "rust",
    extension: "rs",
    seoTitle: "Online Rust Playground — Compile and Run Rust in Your Browser",
    seoDescription:
      "Free online Rust playground and compiler. Write, compile and run Rust code instantly in your browser — no install, no signup. Built for backend engineers.",
    intro:
      "A free online Rust playground for backend engineers. Write Rust, compile it, and read the compiler's response immediately — no rustup install, no cargo project, no signup. Rust's compiler is the main thing you are negotiating with while learning it, so fast feedback matters more here than in most languages. Use the playground to test whether a borrow is valid, see exactly what the borrow checker objects to, check how a trait implementation resolves, or confirm what a match arm actually returns. Compilation happens server-side against a real Rust toolchain, so the errors and warnings you see are the genuine article, formatted the way cargo would format them. Standard input is supported. If you are learning Rust for backend services specifically, the playground connects to our Rust framework guides and projects.",
    faq: [
      {
        q: "Do I get real compiler errors?",
        a: "Yes. Code compiles against a real Rust toolchain, so borrow-checker and type errors appear exactly as they would locally.",
      },
      {
        q: "Can I use external crates?",
        a: "No. The playground runs single-file programs against the standard library only.",
      },
      {
        q: "Is the Rust playground free?",
        a: "Yes, free with no account required.",
      },
    ],
    snippet: `
// Online Rust compiler to run Rust program online
// Print "Try masteringbackend.com" message

fn main() {
    println!("Try masteringbackend.com");
}

    `,
  },
  {
    id: 71,
    name: "Python (3.8.1)",
    label: "Python (3.8.1)",
    displayName: "Python",
    runtime: "Python 3.8.1",
    value: "python",
    icon: "python",
    extension: "py",
    seoTitle: "Online Python Playground — Run Python 3 Code in Your Browser",
    seoDescription:
      "Free online Python playground and compiler. Write, run and test Python 3 code instantly in your browser — no install, no signup. Built for backend engineers.",
    intro:
      "A free online Python playground for backend engineers. Write Python 3, run it, and get output in seconds — no local install, no virtualenv, no signup. It is built for the quick checks that interrupt real work: confirming how a list comprehension evaluates, testing a slice you keep getting off by one, checking what a dictionary method returns before you rely on it. Code runs server-side against a real Python 3 interpreter, so behaviour matches what you would get from a terminal rather than an approximation. Standard input is supported, so scripts using input() work normally. Note that the environment runs single files against the standard library, which covers most of what you need for testing logic. If you are moving from Python snippets to building real backends with FastAPI or Django, the playground pairs with our Python projects and 30-day challenge.",
    faq: [
      {
        q: "Which Python version does this run?",
        a: "Python 3. Code executes server-side against a real interpreter, so standard-library behaviour matches a normal Python 3 environment.",
      },
      {
        q: "Can I import libraries like NumPy or requests?",
        a: "No. The playground runs single-file programs against the standard library only. It is built for testing logic, not for data or network work.",
      },
      {
        q: "Does input() work?",
        a: "Yes. Standard input is supported, so interactive scripts run as they would in a terminal.",
      },
    ],
    snippet: `

# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.

print("Try masteringbackend.com")

    `,
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
    label: "Ruby (2.7.0)",
    displayName: "Ruby",
    runtime: "Ruby 2.7.0",
    value: "ruby",
    icon: "rb",
    extension: "rb",
    seoTitle: "Online Ruby Playground — Run Ruby Code in Your Browser, Free",
    seoDescription:
      "Free online Ruby playground and compiler. Write, run and test Ruby code instantly in your browser — no install, no signup. Built for backend engineers.",
    intro:
      "A free online Ruby playground for backend engineers. Write Ruby, run it, and see output immediately — no rbenv, no bundle install, no signup. Ruby rewards experimentation, and this is the fastest way to try something: chaining enumerable methods to see what actually comes back, testing a block's return value, checking how a string method handles an edge case. Code runs server-side against a real Ruby interpreter, so results match what you would get from irb or a script rather than a simplified sandbox. Standard input is supported for programs that read from stdin. The environment runs single files against the standard library, which is enough for testing logic though not for gem-dependent code. If you are building real backends with Ruby and Rails, the playground sits alongside our backend projects and engineering courses.",
    faq: [
      {
        q: "Can I use Rails or external gems?",
        a: "No. The playground runs single-file Ruby programs against the standard library only.",
      },
      {
        q: "Do blocks, procs and lambdas work?",
        a: "Yes. Standard Ruby language features run normally.",
      },
      {
        q: "Is the Ruby playground free?",
        a: "Yes, free with no account required.",
      },
    ],
    snippet: `
# Online Ruby compiler (interpreter) to run Ruby online.
# Write Ruby code in this online editor and run it.

puts "Try masteringbackend.com"
`,
  },

  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
    label: "Java (OpenJDK 13.0.1)",
    displayName: "Java",
    runtime: "OpenJDK 13.0.1",
    value: "java",
    icon: "java",
    extension: "java",
    seoTitle: "Online Java Playground — Compile and Run Java in Your Browser",
    seoDescription:
      "Free online Java playground and compiler. Write, compile and run Java code instantly in your browser — no JDK install, no signup. For backend engineers.",
    intro:
      "A free online Java playground and compiler for backend engineers. Write Java, compile it, and run it in your browser — no JDK install, no IDE, no project scaffolding, no signup. Java's setup overhead is the main reason people avoid quick experiments in it, which is exactly what this removes. Use it to test how a stream pipeline evaluates, check what a collection returns on an edge case, confirm the behaviour of an exception you are about to catch, or work through interview-style problems without opening IntelliJ. Compilation and execution happen server-side against a real JDK, so compiler errors match what you would see locally. Standard input is supported. Your class should be declared as shown in the starter snippet. If you are preparing for Java backend interviews or building Spring services, the playground connects to our Java projects, interview prep and bootcamp track.",
    faq: [
      {
        q: "Do I need to install the JDK?",
        a: "No. Compilation and execution happen on our servers. A browser is all you need.",
      },
      {
        q: "Can I use Spring or external libraries?",
        a: "No. The playground compiles single-file programs against the standard library. It is built for testing language behaviour and practising problems.",
      },
      {
        q: "What should my class be called?",
        a: "Follow the starter snippet's structure. The main method must be present for the program to run.",
      },
    ],
    snippet: `

// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Try masteringbackend.com");
    }
}

    `,
  },

  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
    label: "C# (Mono 6.6.0.161)",
    displayName: "C#",
    runtime: "Mono 6.6.0.161",
    value: "csharp",
    icon: "csharp",
    extension: "cs",
    seoTitle: "Online C# Playground — Compile and Run C# in Your Browser",
    seoDescription:
      "Free online C# playground and compiler. Write, compile and run C# code instantly in your browser — no Visual Studio, no signup. For backend engineers.",
    intro:
      "A free online C# playground and compiler for backend engineers. Write C#, compile it, and run it in your browser — no Visual Studio, no SDK install, no project file, no signup. It is built for quick verification rather than application development: checking how LINQ evaluates a query, confirming what a nullable reference does at runtime, testing string formatting, or practising interview problems without launching a full IDE. Compilation happens server-side, so the errors you see are real compiler output rather than editor hints. Standard input is supported for programs that read from the console. Programs run as single files against the standard library. If you are building backend services with .NET and want structured practice rather than one-off snippets, the playground pairs with our backend engineering courses and projects.",
    faq: [
      {
        q: "Do I need Visual Studio or the .NET SDK?",
        a: "No. Everything compiles and runs on our servers. You need only a browser.",
      },
      {
        q: "Can I use ASP.NET or NuGet packages?",
        a: "No. The playground compiles single-file programs against the standard library.",
      },
      {
        q: "Does Console.ReadLine work?",
        a: "Yes. Standard input is supported, so console-reading programs behave normally.",
      },
    ],
    snippet: `

// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        Console.WriteLine ("Try masteringbackend.com");
    }
}

    `,
  },

  {
    id: 50,
    name: "C (GCC 9.2.0)",
    label: "C (GCC 9.2.0)",
    displayName: "C",
    runtime: "GCC 9.2.0",
    value: "c",
    icon: "c",
    extension: "c",
    seoTitle: "Online C Playground — Compile and Run C Code in Your Browser",
    seoDescription:
      "Free online C playground and compiler. Write, compile and run C code instantly in your browser with GCC — no install, no signup. For backend engineers.",
    intro:
      "A free online C playground and compiler for backend engineers. Write C, compile it with GCC, and run it in your browser — no toolchain install, no makefile, no signup. C is where a lot of systems and backend fundamentals live, and the compile-run loop is exactly what you want to shorten while learning it. Use the playground to check pointer arithmetic before you trust it, see what a struct actually contains, test a string function against an edge case, or work through data structure exercises without setting up a local environment. Compilation happens server-side against real GCC, so warnings and errors match what you would get from your own terminal. Standard input is supported for programs that read with scanf or fgets. If you are studying data structures and algorithms for backend interviews, the playground pairs with our DSA course and challenge arena.",
    faq: [
      {
        q: "Which compiler does this use?",
        a: "GCC, running server-side, so warnings and errors match a normal local build.",
      },
      {
        q: "Can I use scanf and read input?",
        a: "Yes. Standard input is supported, so programs reading from stdin work as expected.",
      },
      {
        q: "Can I compile multiple files?",
        a: "No. The playground compiles a single source file at a time.",
      },
    ],
    snippet: `

// Online C compiler to run C program online
#include <stdio.h>

int main() {
    // Write C code here
    printf("Try masteringbackend.com");

    return 0;
}

    `,
  },
  {
    id: 54,
    name: "C++ (GCC 9.2.0)",
    label: "C++ (GCC 9.2.0)",
    displayName: "C++",
    runtime: "GCC 9.2.0",
    value: "cpp",
    icon: "cpp",
    extension: "cpp",
    seoTitle: "Online C++ Playground — Compile and Run C++ in Your Browser",
    seoDescription:
      "Free online C++ playground and compiler. Write, compile and run C++ code instantly in your browser with GCC — no install, no signup. For backend engineers.",
    intro:
      "A free online C++ playground and compiler for backend engineers. Write C++, compile it with GCC, and run it in your browser — no local toolchain, no build configuration, no signup. C++ has a long compile-edit cycle at the best of times, so removing setup entirely makes it far more practical to test a single idea. Use it to check how an STL container behaves, confirm what a template instantiates to, test iterator invalidation, or grind through algorithm problems for interview prep. Compilation runs server-side against real GCC, so the error messages you get are the genuine ones, template noise included. Standard input is supported for programs reading with cin. Programs compile as single files against the standard library. If you are practising data structures and algorithms for backend interviews, the playground connects to our DSA course and challenge arena.",
    faq: [
      {
        q: "Which C++ compiler is used?",
        a: "GCC, running server-side, so errors and warnings match a normal local build.",
      },
      {
        q: "Can I use the STL?",
        a: "Yes. The standard library is available, including containers, algorithms and iterators.",
      },
      {
        q: "Can I split code across header and source files?",
        a: "No. The playground compiles a single source file at a time.",
      },
    ],
    snippet: `

// Online C++ compiler to run C++ program online
#include <iostream>

int main() {
    // Write C++ code here
    std::cout << "Try masteringbackend.com";

    return 0;
}
    `,
  },

  // Additional Judge0 languages, currently disabled.
  // Each one enabled here becomes a new indexable page — see the SEO action plan.
  // Confirm the `id` against your own Judge0 instance before enabling:
  //     node scripts/check-judge0-languages.mjs
  //
  // Candidates with existing search demand: SQL, Kotlin, Swift, Scala, Perl, Haskell.
];
