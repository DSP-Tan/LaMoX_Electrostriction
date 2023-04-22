#!/bin/bash

Stresses=("SigX" "SigY" "SigZ" "SigYZ" "SigXZ" "SigXY")

printf "%10s %10s %10s %10s\n" "Stress" "0.5" "0.0"  "-0.5"

#for i in ${Stresses[@]}
for i in "SigX" "SigY" "SigZ" "SigYZ" "SigXZ" "SigXY"
do
  if [ -f ${i}/${i}_0.5GPa/fart.txt ]
    then
    stressPos="Yes"
  else
    stressPos="No"
  fi
  
  if [ -f $i/fart.txt ]
    then
    stress0="Yes"
  else
    stress0="No"
  fi



  if [ -f $i/${i}_-0.5GPa/fart.txt ]
    then
    stressNeg="Yes"
  else
    stressNeg="No"
  fi

  printf "%10s %10s %10s %10s\n" "$i" "$stressPos" "$stress0" "$stressNeg"


done


printf "DFPT calculations\n"
printf "%10s %10s %10s %10s\n" "Stress" "0.5" "0.0"  "-0.5"
for i in "SigX" "SigY" "SigZ" "SigYZ" "SigXZ" "SigXY"
do
  if [ -f ${i}/${i}_0.5GPa/DFPT/PpFin.txt ]
    then
    stressPos="Yes"
  else
    stressPos="No"
  fi
  
  if [ -f $i/fart.txt ]
    then
    stress0="Yes"
  else
    stress0="No"
  fi



  if [ -f $i/${i}_-0.5GPa/DFPT/PpFin.txt ]
    then
    stressNeg="Yes"
  else
    stressNeg="No"
  fi

  printf "%10s %10s %10s %10s\n" "$i" "$stressPos" "$stress0" "$stressNeg"


done
