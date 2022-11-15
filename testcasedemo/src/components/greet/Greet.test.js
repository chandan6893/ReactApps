import { Greet } from "./Greet";
import { render,screen } from '@testing-library/react';

// test("Greet renders properly",()=>{
//     render(<Greet />);
//     const text = screen.getByText("Hello");
//     expect(text).toBeInTheDocument();
// });

// test("Greet renders properly with name",()=>{
//     render(<Greet name={"Air Campus"} />);
//     const text = screen.getByText("Hello Air Campus");
//     expect(text).toBeInTheDocument();
// });




// test.only("Greet renders properly", () => {
//   render(<Greet />);
//   const text = screen.getByText("Hello");
//   expect(text).toBeInTheDocument();
// });

// test.skip("Greet renders properly with name", () => {
//   render(<Greet name={"Air Campus"} />);
//   const text = screen.getByText("Hello Air Campus");
//   expect(text).toBeInTheDocument();
// });


// for grouping the test cases we will use describe()
// note:-as title that is the first arg of describe(),we give component name like Greet

// describe("Greet",()=>{

// test("renders properly", () => {
//   render(<Greet />);
//   const text = screen.getByText("Hello");
//   expect(text).toBeInTheDocument();
//  });

// test("renders properly with name", () => {
//   render(<Greet name={"Air Campus"} />);
//   const text = screen.getByText("Hello Air Campus");
//   expect(text).toBeInTheDocument();
//  });


// });

// note:-another group

// describe("Greet with name",()=>{

//    test("renders properly with name", () => {
//      render(<Greet name={"Air Campus"} />);
//      const text = screen.getByText("Hello Air Campus");
//      expect(text).toBeInTheDocument();
//    }); 

// });



// we can also create subgroups like below

describe("Greet", () => {
  test("renders properly", () => {
    render(<Greet />);
    const text = screen.getByText("Hello");
    expect(text).toBeInTheDocument();
  });

     describe("Greet with name",()=>{

         test("renders properly with name", () => {
         render(<Greet name={"Air Campus"} />);
         const text = screen.getByText("Hello Air Campus");
         expect(text).toBeInTheDocument();
       });

   });
});

