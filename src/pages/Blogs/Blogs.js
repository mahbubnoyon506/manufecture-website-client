import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 px-10 py-10'>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">To improve the performance of a react application are given-</h2>
                        <p>- Keeping components state local where necessary.</p>
                        <p>- Memoizing react components to prevent unnecessary re-renders.</p>
                        <p>- Code splitting in react using dynamic import()</p>
                        <p>- Windowing or list virtualization in react</p>
                        <p>- Avoid lazy loading images in react</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">The four kind of react state to manage</h2>
                        <p>There are four main types of state we need to properly in our react apps:</p>
                        <p>- Local State: Local state is data we manage in one or another components. Local state is most often managed in React using the useState() hook.</p>
                        <p>- Global State: Global state is data we manage accross multi components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                        <p>- Server State: Data thet comes from an external server that must be integreted in UI state.</p>
                        <p>- URL State:  Data thet exists on our URL including the pathname and query parameters</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 px-10 '>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">The uses of prototypal inheritance is given.</h2>
                        <p>- Prototypial inheritance using __proto__ in javascript.</p>
                        <p>- Every objects with its objects and properties contain an internal and hidden property known as <span className='text-primary'>ProtoType</span> The prototypial inheritence is a feature in javascript used to add method and properties in objects. It is a method by which an objects can inherit the properties and method of another object. Traditionally in order to get and set the prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Unit test and its importance is given here</h2>
                        <p>- <span className='text-primary'>UNIT TESTING</span> is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 px-10 py-10'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Uses of search parameter</h2>
                        <p>- To search something by its name, first we need to create a api with query parameter. After thet we take search input text from a input field and search the expected result in api.</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">The reason why we should not update the state directly is-</h2>
                        <p>- if we update it directly, calling the setState() afterward may just replace the update we done.</p>
                        <p>- When we update the state directly it does not change the state immidiately. Inststead it changes a pending state transition and accessing it after calling this method will only return the present value.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;