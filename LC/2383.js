/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let count=0;
    const len= energy.length;
    // for (let i=0; i<len; i++){
    //     if(initialEnergy >= energy[i] && initialExperience > experience[i]){
    //         initialEnergy-=energy[i];
    //         initialExperience+=experience[i];
    //     }
    //     if (initialEnergy < energy[i]) {
    //         count+= energy[i]-initialEnergy+1;
    //     }
    //     if (initialExperience < experience[i]) {
    //         count+= experience[i]-initialExperience+1;
    //     }
    for (let i = 0; i < len; i++) {
        // Check if we need to train for energy
        if (initialEnergy <= energy[i]) {
            count += energy[i] - initialEnergy + 1;
            initialEnergy = energy[i] + 1; // Adjust energy after training
        }
        
        // Check if we need to train for experience
        if (initialExperience <= experience[i]) {
            count += experience[i] - initialExperience + 1;
            initialExperience = experience[i] + 1; // Adjust experience after training
        }
        
        // After defeating the opponent
        initialEnergy -= energy[i];
        initialExperience += experience[i];
    
        
    }
     return count;
};

const initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1];

const ans = minNumberOfHours(initialEnergy,initialExperience,energy,experience);

console.log(ans);