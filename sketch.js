let arr = [],
    i = 0,
	j = arr.length - 1,
    ii = i,
    jj = j,
    start = false;

function setup() {
  createCanvas(800, 600);
  
  for (let x = 0; x < width; x++) {
    arr.push(random(height));
  }
}
		
function draw() {
  background(32, 194, 14);
  
  for (let n = 0; n < width; n++) {
    line(n, height - arr[n], n, height);
    stroke(0);
  }
  
  if(start){
		for (let n = 0; n < width / 2; n++){
  	if(arr[ii] > arr[ii + 1]){
    		swap(arr, ii, ii + 1);
  		}
  		ii++;
  		if(ii >= arr.length - i){
    		ii = 0;
    		j--;
      
      	for (; jj > ii; jj--) {
            if ( array[jj] < array[jj - 1]) {
                swap(array, jj, jj - 1)
            }
        }
      	i++;
  		}
  	}
  }
}

function shakerSort(array) {
    let leftIndex = 0
    let rightIndex = array.length - 1

    while (leftIndex < rightIndex) {
        for (let idx = leftIndex; idx < rightIndex; idx++) {
            if ( array[idx] > array[idx + 1]) {
                swap(array, idx, idx + 1)
            }
        }
        rightIndex--;

        for (let idx = rightIndex; idx > leftIndex; idx--) {
            if ( array[idx] < array[idx - 1]) {
                swap(array, idx, idx - 1)
            }
        }
        leftIndex++;
    }

    return array
}

function swap(array, i, j) {
	let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function mousePressed() {
  start = start ? false : true;
}