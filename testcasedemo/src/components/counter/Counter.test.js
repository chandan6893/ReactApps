import { Counter } from "./Counter";
import { render,screen } from "@testing-library/react";

describe("Counter Component",()=>{
        test("renders input correctly",()=>{
            render(<Counter />);
// below we r writing test case for input i.e textbox
        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();
        });

        test("renders select corrctly",()=>{
            render(<Counter />);
 // below we r writing test case for select tag i.e combobox    
        const locationElement = screen.getByRole("combobox");
        expect(locationElement).toBeInTheDocument();
        });

        test("renders checkbox correctly",()=>{
            render(<Counter />);
            const termsElement = screen.getByRole("checkbox");
            expect(termsElement).toBeInTheDocument();
        });

        test("renders button correctly",()=>{
            render(<Counter />);
            const submitBtnElement = screen.getByRole("button");
            expect(submitBtnElement).toBeInTheDocument();
        });
});