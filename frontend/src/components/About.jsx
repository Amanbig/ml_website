import React from 'react';

function About() {
    return (
        <div className="container">
            <h2>About</h2>
            <p>This application is designed to predict the type of glass based on certain features provided by the user.</p>
            <h3>Glass Types</h3>
            <p>Glass is a versatile material used in various industries and applications. Here are some common types of glass:</p>
            <ul>
                <li><strong>Building Windows Float Processed:</strong> This type of glass is produced by floating molten glass on top of molten tin, resulting in a smooth surface suitable for windows and architectural applications.</li>
                <li><strong>Building Windows Non Float Processed:</strong> Unlike float glass, non-float processed glass is produced using other methods such as rolling or drawing.</li>
                <li><strong>Vehicle Windows Float Processed:</strong> Glass used in automotive applications, manufactured using the float glass process for strength and durability.</li>
                <li><strong>Vehicle Windows Non Float Processed:</strong> Glass for vehicles produced using methods other than float processing.</li>
                <li><strong>Containers:</strong> Glass containers for packaging food, beverages, and other products.</li>
                <li><strong>Tableware:</strong> Glassware used for serving food and beverages, including plates, bowls, cups, and glasses.</li>
                <li><strong>Headlamps:</strong> Glass lenses used in automotive headlamp assemblies.</li>
            </ul>
            <h3>Features</h3>
            <ul>
                <li>Allows users to input various features of glass such as refractive index, sodium content, magnesium content, etc.</li>
                <li>Utilizes machine learning models to predict the type of glass based on the provided features.</li>
                <li>Displays the predicted type of glass along with relevant information, such as the confidence score of the prediction.</li>
                <li>Provides visualizations to help users understand the prediction results better.</li>
            </ul>
            <h3>Technologies Used</h3>
            <ul>
                <li>Frontend: React</li>
                <li>Backend: Flask (Python)</li>
                <li>Machine Learning: Scikit-learn (Python)</li>
                <li>Deployment: Docker, Heroku (or other cloud platform)</li>
            </ul>
            <h3>Authors</h3>
            <p>This application was created by <b>Amanpreet Singh</b> as a project for Glass Classification.</p>
            <h3>Contact</h3>
            <p>If you have any questions or feedback, please contact us at .</p>
            <h3>License</h3>
            <p>This project is licensed under the [License Name].</p>
            </div>
    );
}

export default About;
