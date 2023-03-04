#!/bin/bash

for i in SigX_*
do

if [ -f $i/fart.txt ] && [ ! -f $i/DFPT/fart.txt ]
then
   cd $i
   rm *-o* abi.out0* log\.* slurm\.* 

   ~/Scripts/DFPT/MakeGS.sh abi.in abi.out
   ~/Scripts/DFPT/MakeDFPT.sh .
   
   sed  '/mem-per-cpu/s/774/1548/g'  ../Run.sh > DFPT/Run.sh 
   sed  -i '/\-job-name/s/XXXX/'${i}'DFPT/g' DFPT/Run.sh
   sed -i 's/time=06/time=10/g' DFPT/Run.sh
   cd DFPT
   sbatch Run.sh
   cd ../../
fi
done

