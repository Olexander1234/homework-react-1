

export const Statistics = (props)=>{
 
 const {stats, title} = props
 return  <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    {stats.map((stat)=>{
       return <li style={{backgroundColor: `#${ Math.floor(Math.random()*16777215).toString(16)}` }} className="item" key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
    })}
    

  </ul>
</section>
}