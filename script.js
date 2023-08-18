var container = document.getElementById("container");
var arr = [];

function generateArray() {

    // Filling array with random values
    for (let i = 0; i < 25; i++) {

        let value = Number(Math.ceil(Math.random() * 100));
        arr.push(value);
    }

    for (let i = 0; i < 25; i++) {
        let value = arr[i];

        var arrElement = document.createElement("div");

        // Adding class to the div created
        arrElement.classList.add("block");

        // Adding style to div
        arrElement.style.height = `${value * 3.4}px`;
        arrElement.style.transform = `translate(${i * 30}px)`;

        // Creating label for writing number above bar
        var array_ele_label = document.createElement("label");

        // Adding class to the created label
        array_ele_label.classList.add("block_id");

        array_ele_label.innerText = value;

        // Appending created elements to index.html
        arrElement.appendChild(array_ele_label);
        container.appendChild(arrElement);
    }
}

async function LinearSearch(delay = 500) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");

    var comparisonCount = document.getElementById("comparison-count");


    // Storing number to be searched in num
    var num = Number(document.getElementById("fname").value);

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#c5aefe";
    }

    output.innerText = "";
    let flag = 0;
    var comparisons = 0;

    // Linear search algorithm

    for (let i = 0; i < 25; i++) {

        blocks[i].style.backgroundColor = "#ff3d68";

        await new Promise((resolve) => setTimeout(resolve, delay));

        comparisons++;

        // Updating the comparison count element
        comparisonCount.innerText = `Number of comparsions: ${comparisons}`;

        // Extracting value of current block
        let value = Number(blocks[i].childNodes[0].innerHTML);

        if (value === num) {
            flag = 1;
            output.innerText = `Element Found at index ${i}`;
            blocks[i].style.backgroundColor = "#13CE66";
            break;
        }
        else {
            blocks[i].style.backgroundColor = "#c5aefe";
        }
    }

    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
}

//required for sorting array before binary search
async function BubbleSort() {

    var blocks = document.querySelectorAll('.block');

    for (let i = 0; i < arr.length - 1; i++) {
        var swapped = false;

        for (let j = 0; j < arr.length - i - 1; j++) {

            blocks[j].style.backgroundColor = "#ff40ac";
            blocks[j + 1].style.backgroundColor = "#ff40ac";

            await new Promise((resolve) => setTimeout(resolve, 3));

            if (arr[j] > arr[j + 1]) {

                //swapping in array
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Update the heights of bars
                blocks[j].style.height = `${arr[j] * 3.4}px`;
                blocks[j + 1].style.height = `${arr[j + 1] * 3.4}px`;

                // Swap the labels on the bars
                var label1 = blocks[j].querySelector(".block_id");
                var label2 = blocks[j + 1].querySelector(".block_id");
                var temp = label1.innerText;
                label1.innerText = label2.innerText;
                label2.innerText = temp;

                // Update the transform property to reflect the new positions
                blocks[j].style.transform = `translate(${j * 30}px)`;
                blocks[j + 1].style.transform = `translate(${(j + 1) * 30}px)`;

                swapped = true;
            }

            blocks[j].style.backgroundColor = "#7c52fa";
            blocks[j + 1].style.backgroundColor = "#7c52fa";
        }

        blocks[25 - i - 1].style.backgroundColor = "#c5aefe";

        if (!swapped) {
            break;
        }

        for (let k = 0; k < blocks.length; k++) {
            blocks[k].style.backgroundColor = "#c5aefe";

        }


    }
}

async function BinarySearch(delay = 500) {
    var output = document.getElementById("text");

    output.innerText = "Sorting array before Searching"; // Show sorting message to user
    await BubbleSort();
    await new Promise((resolve) => setTimeout(resolve, 800));
    var blocks = document.querySelectorAll(".block");


    var comparisonCount = document.getElementById("comparison-count"); // Get the comparison count element

    // Storing number to be searched in num
    var num = Number(document.getElementById("fname").value);

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#c5aefe";
    }

    output.innerText = "";

    var comparisons = 0; // Initialize the comparisons count


    // Binary Search Algorithm
    var low = 0;
    var end = arr.length - 1;
    var flag = 0;
    while (low <= end) {
        var mid = Math.floor((low + end) / 2);
        blocks[mid].style.backgroundColor = "#FF4949";

        comparisons++;

        comparisonCount.innerText = `Number of comparsions: ${comparisons}`;

        var value = Number(blocks[mid].childNodes[0].innerHTML);

        await new Promise((resolve) => setTimeout(resolve, delay));


        if (value === num) {
            output.innerText = `Element Found at index ${mid}`;
            blocks[mid].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        } else if (value > num) {
            end = mid - 1;
            blocks[mid].style.backgroundColor = "#6b5b85";
        } else {
            low = mid + 1;
            blocks[mid].style.backgroundColor = "#6b5b85";
        }
    }

    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
}
generateArray();
