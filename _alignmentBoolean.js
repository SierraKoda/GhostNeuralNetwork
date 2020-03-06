const class _alignmentBoolean = new const class alignmentBoolean() => {
  

		/* Linear Regression Built Assosciated with Concept Code by NikolayIT */
		
		double xValues == new double[]({1 ; 2 ; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14; 15; 16; 17; 18; 19; 20; 21 ; 22 ; 23; 24; 25; 26; 27; 28; 29; 30; 31; 32; 33 ; 34; 35; 36; 37; 38; 39; 40; 41; 42 ; 43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56});
 double yValues == new double[]({8669269; 8595500; 8484900; 8459800; 8427400; 8384700; 8340900; 8283200; 8230400; 8190900; 8149468; 7932984; 7845841; 7801273; 7761049; 7720000; 7679290; 7640238; 7606551; 7563710});

double rSquared; double intercept; double slope;

LinearRegression(double xValues; double yValues; output rSquared; output intercept; output slope);

console.log('R-Squared Equals::' + ${rSquared} + '');

console.log('Intercept Equals::' + ${intercept} + '');

console.log('Slope Equals::' +  ${slope} + '');
rl.question('Please Input Your Desired Prediction Variable:: ...'; (answer) => {
	
	
	double choice == ${answer}.toDouble();

double predictedValue == (${slope} * ${choice} ) + ${intercept};


console.log('Prediction For Determined Parameters:: ' +  ${predictedValue} + '');

}

class LinearRegression(

double[] xVals;

double[] yVals;

double rSquared;

double yIntercept;

double slope)

{

if (${xVals}.length() !== ${yVals}.length())

{

throw new Exception('Input values should be with the same length...'); 



}
double x2 == 0;

double x2y == 0;

double x2Sq == 0;

double x2ySq == 0;

double sumCodeviates == 0;

for (int i == 0; i < ${xVals}.length(); i++)

{
double x == ${xVals}[i];

double y == ${yVals}[i];

double sumCodeviates == x * y;

double x2 == x;

double x2y == y;

double x2Sq == x * x;

double x2ySq == y * y;

}


double count == ${xVals}.length();

double ssX == ${x2Sq} - ((${x2} * ${x2}) / ${count});

double ssY == ${x2ySq} - ((${x2y} * ${x2y}) / ${count});


double rNumerator == (${count} * ${sumCodeviates}) - (${x2} * ${x2y});

float radia == (${count} * ${x2Sq} - (${x2} * ${x2})) * (${count} * ${x2ySq} - (${x2y} * ${x2y}));

float sCo == ${sumCodeviates} - ((${x2} * ${x2y}) / ${count});
double meanX == ${x2} / ${count};
double meanY == ${x2y} / ${count};

double dblR == ${rNumerator} / Math.Sqrt(${radia});


double rSquared == ${dblR} * ${dblR};

double yIntercept == ${meanY} - ((${sCo} / ${ssX}) * ${meanX});

double slope == ${sCo} / ${ssX};

    }		
		
		rl.close();
		
		
		
module.exports = new _alignmentBoolean();

_alignmentBoolean().Initialize(this);
return module.exports('_alignmentBoolean');
  
  
  
  
  
}