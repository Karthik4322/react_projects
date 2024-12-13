import { render,screen } from "@testing-library/react";
import MyNameComp from "./MyNameComp";

test("render myname Component",()=>{
    render(<MyNameComp></MyNameComp>)
    let createElement = screen.getByText("My Name is Panchashil");
    expect(createElement).toBeInTheDocument();
})
test("render myname Component props name ",()=>{
    render(<MyNameComp name ="Panchashil" post="Fullstack Developer"></MyNameComp>);
    let createElement = screen.getByText("My Name is :Panchashil");
    expect(createElement).toBeInTheDocument();
})
test("render myname Component props post",()=>{
    render(<MyNameComp  name ="Panchashil" post ="FullStack Developer"></MyNameComp>);
    let createElement = screen.getByText("I am :FullStack Developer");
    expect(createElement).toBeInTheDocument();
})