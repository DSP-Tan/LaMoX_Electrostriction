#!/bin/bash

for i in SigX_*
do
   if [  -f $i/DFPT/fart.txt ] && [ ! -f $i/DFPT/fart.txt ]
   then

   cd $i/DFPT
   cp ~/Scripts/DFPT/PostProc/* .
   sbatch PostProc.sh
   cd ../../
   fi

done
