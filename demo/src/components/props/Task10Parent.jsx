import React from "react";
import Gallery from "./Task10";

const Task10Parent=()=>{



    let imgArr=["https://media.istockphoto.com/id/1388420740/photo/net-zero-and-carbon-neutral-concepts-net-zero-emissions-goals-a-climate-neutral-long-term.jpg?s=612x612&w=0&k=20&c=3ZsKkJHs8FnAk5dXdCOjd85DyKu3RissYxk161yFgBM=","https://media.istockphoto.com/id/1048088032/vector/percent-down-line-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=ycYkdRlAnCIPZ1uQsr6_tqIjqXpjqamcSSSKo5YyYw8="]

    return(
        <>
        <div>Task10Parent</div>
        <Gallery  props={imgArr}/>
        </>
    )
}

export default Task10Parent;