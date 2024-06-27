import React from 'react'
import { create } from 'zustand'

interface Bearstate{
  bears: number,
  increasePopulation: ()=>void
  decreasePopulation: ()=>void
}

const useStore = create<Bearstate>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: ()=> set((state)=> ({bears : state.bears -1})),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears:number) => set({ bears: newBears }),
}))

function BearCounter() {
  const bears:number = useStore((state : Bearstate) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state : Bearstate) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

function ControlsMinus(){
  const decreasePopulation = useStore((state:any)=> state.decreasePopulation)
  return <button onClick={decreasePopulation}>one down</button>
}

function AboutPage() {
    return (
      <div>
        <h1>This is the About page</h1>
        <p>This content will be displayed on the /about route.</p>
        <div className=' flex justify-between'>
        <Controls />
        <BearCounter />
        <ControlsMinus />
        </div>
      </div>
    );
  }
  
  export default AboutPage;
