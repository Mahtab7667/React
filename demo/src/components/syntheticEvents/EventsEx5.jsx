import React from 'react'

const EventsEx5 = () => {

    let handleCroll=(e)=>{
        let result=e.target;
        // e.target.style.background="red"
        result.style.background="green"
    }


  return (
    <>
    <div>EventsEx5</div>

    <p style={{width:"400px", height:"400px", border:"1px solid black",overflow:"auto", margin:"50px",padding:"20px"}} onScroll={handleCroll}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde consequatur ab perferendis excepturi eius obcaecati impedit, recusandae eveniet, adipisci dolorum sunt iusto accusamus. Eligendi laboriosam soluta porro veritatis atque consequatur ea at, reprehenderit delectus ratione praesentium corrupti? Tempora doloremque nihil consectetur labore nisi suscipit harum, obcaecati cumque rerum sapiente ducimus, aut facere autem ullam quis perspiciatis ipsa perferendis maxime assumenda sint delectus maiores! Nulla minus rerum porro aut, nesciunt inventore architecto quo iste accusantium illo quidem, ea sequi atque animi modi harum quibusdam dolore culpa. Voluptates error debitis at numquam earum consequatur necessitatibus laudantium ipsum labore velit possimus aliquid ullam alias, quae amet minus. Exercitationem ab nobis possimus, dolore porro perspiciatis et eaque consequuntur quis vitae assumenda officiis quasi aliquam aspernatur, ratione ipsum laudantium nostrum necessitatibus non modi dignissimos culpa rem architecto commodi. Praesentium deleniti, iusto optio possimus magni ipsum veniam fugit voluptates assumenda obcaecati, voluptate nulla, ex ad adipisci sed dolore! Voluptate dolorem, voluptatum perspiciatis ab nisi ut quas, quos animi cupiditate adipisci, fuga quisquam quam maiores! Distinctio voluptatum iusto, libero cum possimus dignissimos animi odit nemo est modi pariatur porro necessitatibus enim vel vero! Labore at tempore necessitatibus quia et aspernatur earum sed nesciunt eaque, ab amet iusto libero sapiente optio explicabo, aperiam aliquam vel natus dolores quisquam cumque, reiciendis consequuntur. Porro itaque dolore neque adipisci. Totam odio assumenda voluptatum quod quaerat rem unde, saepe aliquid in ipsa quibusdam ex eveniet voluptates mollitia odit? Fugiat et exercitationem soluta cum, rerum animi perspiciatis tenetur accusamus natus possimus, est, quod voluptatibus hic iusto illo distinctio eum aut voluptates temporibus. Eius, iste reiciendis! Similique placeat qui maxime non suscipit optio quia ut id perspiciatis ratione ipsam officia facere sequi fugiat in temporibus unde, quasi repellat sint quo obcaecati illum reprehenderit iste? Hic placeat nobis ipsam laboriosam aperiam fuga quibusdam quas.
    </p>
    </>
  )
}

export default EventsEx5