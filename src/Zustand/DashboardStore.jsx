import {create} from 'zustand';




export const useDashboardStore= create((set,get)=>({
    text:'',
    textList:[],
    isToggled:false,
    handleSetText:(e)=>{
        set((state)=>({
            text: e.target.value
        }))
    },
    handleSubmit:(e)=>{
        e.preventDefault();
        const state=get();
        if(!state.text)throw new Error('Input cannot be empty');
        set((state)=>({
            textList:[...state.textList,state.text],
            text:''
        }))
    },
    handleDeleteItem:(val)=>{
        if(val!==-1){
            set((state)=>({
                textList:[...state.textList].filter((tex,i)=>i!==val)
            }))
        }
    },
    handleToggle:()=>[
        set((state)=>({
            isToggled:!state.isToggled
        }))
    ]

}))