const students = [
	{ name: 'Alice', age: 19, math: 80, english: 75, science: 65 },
	{ name: 'Bob', age: 17, math: 60, english: 55, science: 45 },
	{ name: 'Charlie', age: 18, math: 95, english: 85, science: 75 },
	{ name: 'David', age: 20, math: 85, english: 90, science: 95 },
	{ name: 'Eve', age: 22, math: 40, english: 62, science: 55 }
  ];
// Step 1: Filter eligible students based on criteria
const eligibleStudents = students.filter(student =>
	student.age >= 18 &&          // Age >= 18
	student.science >= 50 &&      // Science score >= 50
	student.english >= 60         // English score >= 60
  );

  // Step 2: Calculate average score and apply bonus points if Math >= 90
  const processedStudents = eligibleStudents.map(student => {
	const avgScore = (student.math + student.english + student.science) / 3;
	let adjustedAvg = avgScore;

	// Apply 5 bonus points if Math score >= 90
	if (student.math >= 90) {
	  adjustedAvg += 5;
	}

	return {
	  name: student.name,
	  originalAvg: parseFloat(avgScore.toFixed(2)),    // Round to 2 decimal places
	  adjustedAvg: parseFloat(adjustedAvg.toFixed(2)),
	  status: adjustedAvg >= 80 ? '✅' : '❌'          // Scholarship status
	};
  });

  // Step 3: Sort the students based on adjusted average score
  processedStudents.sort((a, b) => b.adjustedAvg - a.adjustedAvg);

  // Step 4: Calculate the total sum of adjusted averages
  const totalAdjustedSum = processedStudents.reduce((sum, student) => sum + student.adjustedAvg, 0);

  // Step 5: Output the results
  console.log('Eligible students ranked by adjusted average score:', processedStudents);
  console.log('Total sum of adjusted average scores:', totalAdjustedSum.toFixed(2));
