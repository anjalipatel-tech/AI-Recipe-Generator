function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Turn Your Food Image <br />
          Into a Delicious Recipe 🍲
        </h1>

        <p>
          Upload a food image and let AI generate
          the complete recipe with ingredients,
          cooking steps, nutrition facts and cooking time.
        </p>

        <div className="hero-buttons">
          <button className="upload-btn">Upload Image</button>
          <button className="explore-btn">Explore Recipes</button>
        </div>

      </div>

      <div className="hero-image">
        🍕
      </div>

    </section>
  );
}

export default Hero;