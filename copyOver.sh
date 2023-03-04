#!/bin/bash

rsync -avh  \
	--exclude "*-[oi]*" \
	--exclude "err" \
	--exclude "abi.out*" \
	--exclude "slurm-*" \
	--exclude "log.[0-9]*" \
	--exclude "anaddb_*" \
	--exclude "fart.txt" \
	--exclude "anaddb0*" \
	--exclude "abi.ddb" \
	--exclude "PHBST*" \
	--exclude "anaddb.log"   \
/scratch/ulg/phythema/dtanner/LaMoOX/o-La2Mo2O9/  .

