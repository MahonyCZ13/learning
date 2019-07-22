#include <stdio.h>

int main() {
    
    int grades[2];
    int avarage;

    grades[0] = 80;
    grades[1] = 85;
    grades[2] = 90;

    avarage = (grades[0] + grades[1] + grades[2]) / 3;

    printf("The avarage of the 3 grades is: %d", avarage);

    return 0;
}