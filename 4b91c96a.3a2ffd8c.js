(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(92)),c={id:"doc4",title:"4 - The Compiler and Other Useful Information"},i={unversionedId:"doc4",id:"doc4",isDocsHomePage:!1,title:"4 - The Compiler and Other Useful Information",description:"This guide assumes that you have already read the previous parts.",source:"@site/docs/doc4.md",permalink:"/docs/doc4",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/doc4.md",sidebar:"someSidebar",previous:{title:"3 - Deeper into CLVM",permalink:"/docs/doc3"},next:{title:"The Great Chia Glossary",permalink:"/docs/doc5"}},l=[{value:"Run",id:"run",children:[{value:"list",id:"list",children:[]},{value:"qq unquote",id:"qq-unquote",children:[]},{value:"and",id:"and",children:[]}]},{value:"Compiling to CLVM with Mod",id:"compiling-to-clvm-with-mod",children:[]},{value:"Functions, Macros and Constants",id:"functions-macros-and-constants",children:[{value:"Factorial",id:"factorial",children:[]},{value:"Squaring a List",id:"squaring-a-list",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide assumes that you have already read the previous parts.\nIt is highly recommended that you do so as the higher level language is built directly on top of the lower level language."),Object(r.b)("h2",{id:"run"},"Run"),Object(r.b)("p",null,"The first difference you need to be aware of for the higher level language is that you should call ",Object(r.b)("inlineCode",{parentName:"p"},"run")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"brun"),".\nThis lets the runtime know that it should be including higher level features."),Object(r.b)("p",null,"The first higher level feature you should be aware of is that it is no longer necessary to quote atoms."),Object(r.b)("p",null,"Compare ",Object(r.b)("inlineCode",{parentName:"p"},"brun")," and ",Object(r.b)("inlineCode",{parentName:"p"},"run")," here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(+ 200 200)'\nFAIL: first of non-cons ()\n$ run '(+ 200 200)'\n400\n")),Object(r.b)("p",null,"Run also gives us access to a number of convenient high level operators, which we will cover now."),Object(r.b)("h3",{id:"list"},"list"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"list")," takes any number of parameters and returns them put inside a list.\nThis saves us from having to manually create nested ",Object(r.b)("inlineCode",{parentName:"p"},"(c (A) (c (B) (q ())))")," calls, which can get messy quickly."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'$ run \'(list 100 "test" 0xdeadbeef)\'\n(100 "test" 0xdeadbeef)\n')),Object(r.b)("h1",{id:"if"},"if"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"if")," automatically puts our ",Object(r.b)("inlineCode",{parentName:"p"},"i")," statement into the lazy evaluation form so we do not need to worry about the unused code path being evaluated."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(if (= (f (a)) 100) (q \"success\") (x))' '(100)'\n\"success\"\n\n$ run '(if (= (f (a)) 100) (q \"success\") (x))' '(101)'\nFAIL: clvm raise ()\n")),Object(r.b)("h3",{id:"qq-unquote"},"qq unquote"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"qq")," allows us to quote something with selected portions being evaluated inside by using ",Object(r.b)("inlineCode",{parentName:"p"},"unquote"),".\nThe advantages of this may not be immediately obvious but are extremely useful in practice as it allows us to substitute out sections of predetermined code."),Object(r.b)("p",null,"Suppose we are writing a program that returns another coin's puzzle.\nWe know that a puzzle takes the form: ",Object(r.b)("inlineCode",{parentName:"p"},"(c (c (q 50) (c (q 0xpubkey) (c (sha256tree (f (a))) (q ())))) ((c (f (a)) (f (r (a))))))"),"\nHowever we will want to change 0xpubkey to a value passed to us through our solution."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(qq (c (c (q 50) (c (q (unquote (f (a)))) (c (sha256tree (f (a))) (q ())))) ((c (f (a)) (f (r (a)))))))' '(0xdeadbeef)'\n\n(c (c (q 50) (c (q 0xdeadbeef) (c (sha256tree (f (a))) (q ())))) ((c (f (a)) (f (r (a))))))\n")),Object(r.b)("h3",{id:"and"},"and"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"and")," takes two boolean values and returns true if both values are true"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(and (= (f (a)) 10) (= (f (r (a))) 20))' '(10 20)'\n1\n\n$ run '(and (= (f (a)) 10) (= (f (r (a))) 20))' '(10 25)'\n()\n$ run '(and (= (f (a)) 10) (= (f (r (a))) 20))' '(15 20)'\n()\n\n")),Object(r.b)("h2",{id:"compiling-to-clvm-with-mod"},"Compiling to CLVM with Mod"),Object(r.b)("p",null,"It is important to remember that in practice smart contracts will run using the lower level language, so none of the above operators will work on the network.\nWhat we ",Object(r.b)("em",{parentName:"p"},"can")," do however is compile them down to the lower level language.\nThis is where ",Object(r.b)("inlineCode",{parentName:"p"},"mod")," comes in.\n",Object(r.b)("inlineCode",{parentName:"p"},"mod")," is an operator that lets the runtime know that it needs to be compiling the code rather than actually running it."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"(mod A B)")," takes two or more parameters. The first is used to name parameters that are passed in, and the last is the higher level script which is to be compiled."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run '(mod (arg_one arg_two) (list arg_one))'\n(c (f (a)) (q ()))\n")),Object(r.b)("p",null,"As you can see it returns our program in compiled lower level form."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brun '(c (f (a)) (q ()))' '(100 200 300)'\n(100)\n")),Object(r.b)("p",null,"You may be wondering what other parameters ",Object(r.b)("inlineCode",{parentName:"p"},"mod")," takes, between variable names and source code."),Object(r.b)("h2",{id:"functions-macros-and-constants"},"Functions, Macros and Constants"),Object(r.b)("p",null,"In the lower level language functions were created by passing a copy of the source code to an eval so that it could call itself again.\nIn the higher level language we can define functions, macros, and constants before our program by using ",Object(r.b)("inlineCode",{parentName:"p"},"defun"),", ",Object(r.b)("inlineCode",{parentName:"p"},"defmacro")," and ",Object(r.b)("inlineCode",{parentName:"p"},"defconstant"),"."),Object(r.b)("p",null,"We can define as many of these as we like before the main source code.\nUsually a program will be structured like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(mod (arg_one arg_two)\n  (defconstant const_name value)\n  (defun function_name (parameter_one parameter_two) (*function_code*))\n  (defun another_function (param_one param_two param_three) (*function_code*))\n  (defmacro macro_name (param_one param_two) (*macro_code*))\n\n  (main program)\n)\n")),Object(r.b)("p",null,"A few things to note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Functions can reference themselves in their code but macros cannot as they are inserted at compile time, similar to inline functions."),Object(r.b)("li",{parentName:"ul"},"Both functions and macros can reference other functions, macros and constants."),Object(r.b)("li",{parentName:"ul"},"Macros that refer to their parameters must be quasiquoted with the parameters unquoted"),Object(r.b)("li",{parentName:"ul"},"Be careful of infinite loops in macros that reference other macros."),Object(r.b)("li",{parentName:"ul"},"Comments can be written with semicolons")),Object(r.b)("p",null,"Now lets look at some example programs using functions."),Object(r.b)("h3",{id:"factorial"},"Factorial"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(mod (arg_one)\n  ; function definitions\n  (defun factorial (input)\n    (if (= input 1) 1 (* (factorial (- input 1)) input))\n  )\n\n  ; main\n  (factorial arg_one)\n)\n")),Object(r.b)("p",null,"We can save these files to .clvm files which can be run from the commandline.\nSaving the above example as ",Object(r.b)("inlineCode",{parentName:"p"},"factorial.clvm")," allows us to do the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run factorial.clvm\n((c (q ((c (f (a)) (c (f (a)) (c (f (r (a))) (q ())))))) (c (q ((c (i (= (f (r (a))) (q 1)) (q (q 1)) (q (* ((c (f (a)) (c (f (a)) (c (- (f (r (a))) (q 1)) (q ()))))) (f (r (a)))))) (a)))) (a))))\n\n$ brun '((c (q ((c (f (a)) (c (f (a)) (c (f (r (a))) (q ())))))) (c (q ((c (i (= (f (r (a))) (q 1)) (q (q 1)) (q (* ((c (f (a)) (c (f (a)) (c (- (f (r (a))) (q 1)) (q ()))))) (f (r (a)))))) (a)))) (a))))' '(5)'\n120\n")),Object(r.b)("h3",{id:"squaring-a-list"},"Squaring a List"),Object(r.b)("p",null,"Now lets do an example which uses macros as well.\nWhen writing a macro it must be quasiquoted with the parameters being unquoted."),Object(r.b)("p",null,"We can also take this time to show another feature of the compiler.\nYou can name each parameter in a list or you can name the list itself.\nThis works at any place where you name parameters, and allows you to handle lists where you aren't sure of the size."),Object(r.b)("p",null,"Here we define a macro to square a parameter and then a function to square a list."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"(mod args\n\n  (defmacro square (input)\n    (qq (* (unquote input) (unquote input)))\n  )\n\n  (defun sqre_list (my_list)\n    (if my_list\n      (c (square (f my_list)) (sqre_list (r my_list)))\n      my_list\n    )\n  )\n\n  (sqre_list args)\n)\n")),Object(r.b)("p",null,"Compiling and running this code results in this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ run square_list.clvm\n((c (q ((c (f (a)) (c (f (a)) (c (r (a)) (q ())))))) (c (q ((c (i (f (r (a))) (q (c (* (f (f (r (a)))) (f (f (r (a))))) ((c (f (a)) (c (f (a)) (c (r (f (r (a)))) (q ()))))))) (q (f (r (a))))) (a)))) (a))))\n\n$ brun '((c (q ((c (f (a)) (c (f (a)) (c (r (a)) (q ())))))) (c (q ((c (i (f (r (a))) (q (c (* (f (f (r (a)))) (f (f (r (a))))) ((c (f (a)) (c (f (a)) (c (r (f (r (a)))) (q ()))))))) (q (f (r (a))))) (a)))) (a))))' '(10 9 8 7)'\n(100 81 64 49)\n")),Object(r.b)("h1",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"You should now have the context and knoweldge needed to write your own smart contracts.\nRemember from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/doc2/"}),"part 2")," that these programs run on the blockchain and instruct the blockchain what to do with the coin's value."),Object(r.b)("p",null,"If you have further questions feel free to ask on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://keybase.io/team/chia_network.public"}),"Keybase"),"."))}u.isMDXComponent=!0}}]);