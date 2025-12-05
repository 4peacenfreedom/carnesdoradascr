export default function GoogleMap() {
  return (
    <section className="w-full h-[500px] lg:h-[600px]">
      <iframe
        title="Carnes Doradas Costa Rica - Ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.3528764384682!2d-84.23094262572174!3d9.989247673221204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9518908c453%3A0xf80b62eed0790076!2sCarnes%20Doradas%20de%20Costa%20Rica!5e1!3m2!1ses!2scr!4v1764649743425!5m2!1ses!2scr"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}
