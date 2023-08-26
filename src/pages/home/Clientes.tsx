import { Bar } from '../../icons/icons'
const Clientes = () => {
  return (
    <section
      className='bg-primary text-white section'
      id='clientes'
    >
      <div className='m-auto max-w-6xl grid lg:grid-cols-2 items-center gap-12 px-8 py-20 lg:py-48'>
        <div>
          <h1 className='text-5xl lg:text-6xl mb-12'>
            <strong>NUESTROS CLIENTES</strong>
          </h1>
          <div>
            <Bar />
          </div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum saepe aliquid quos a quis corrupti fugit enim
          consectetur. Corrupti assumenda, placeat vitae cupiditate sed facere quasi atque impedit illum explicabo!
          <br /> <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum saepe aliquid quos a quis corrupti fugit enim
          consectetur. Corrupti assumenda, placeat vitae cupiditate sed facere quasi atque impedit illum explicabo!
        </div>
      </div>
    </section>
  )
}

export default Clientes
