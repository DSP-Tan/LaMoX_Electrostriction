#input for non-centrosymmetric orthorhombic HfO2

ndtset    2

autoparal 1

#Crystal Def.
ntypat   3
natom    26
typat    4*1 4*2 18*3
znucl    57 42 8
acell 3*1

rprim
  1.36301214040805E+01 -6.98727164487912E-01  3.55736476977818E-03
 -7.26959797161489E-01  1.35574487477822E+01  6.94552570305237E-03
  2.71831932835366E-03  7.16202512031010E-03  1.32979198505400E+01

             xred      8.3444077137E-01  8.9546774490E-01  8.7580482077E-01
                       3.7157695848E-01  6.8221392364E-01  1.3075143476E-01
                       1.2773984843E-01  3.1828024525E-01  6.2982061363E-01
                       6.6545307975E-01  1.0453938559E-01  3.7580576888E-01
                       2.0563477848E-01  2.0235732413E-01  1.6872194559E-01
                       6.1950901255E-01  3.1089687170E-01  8.3820378261E-01
                       8.8054002418E-01  6.8917046009E-01  3.3838463561E-01
                       2.9436776282E-01  7.9758450487E-01  6.6933675899E-01
                       2.8513939985E-01  4.0247339498E-01  3.1610700856E-01
                       8.0599271968E-01  1.9598878693E-01  6.8057757192E-01
                       6.9370681233E-01  8.0333361146E-01  1.8074692170E-01
                       2.1421474139E-01  5.9733319301E-01  8.1667647376E-01
                       1.0174731470E+00  1.3401465042E-01  3.3224878712E-01
                       4.6369919054E-01  2.4929332859E-01  6.3207195013E-01
                       3.6200873229E-02  7.5161647434E-01  1.3194080792E-01
                       4.8183518866E-01  8.6631556706E-01  8.3329644562E-01
                       3.5908782339E-01  1.0275286806E+00  1.9008218212E-01
                       1.4082714679E-01 -2.7522722349E-02  6.8875233738E-01
                       7.2954110831E-01  5.4024624608E-01  8.3562354489E-01
                       7.7143351422E-01  4.5943591899E-01  3.3638635895E-01
                       7.2899477391E-02  1.9809496860E-01  9.5630505762E-01
                       7.9997444330E-01  8.3865121801E-01  5.2606751786E-01
                       4.2801040382E-01  8.0120995337E-01  4.5746491868E-01
                       7.0008710387E-01  1.6114340036E-01  2.6003926842E-02
                       4.1588485954E-01  3.5569431893E-01  9.9163373064E-01
                       1.0847298105E+00  6.4463855051E-01  4.9118469742E-01
 
kptopt   1
            ngfft          72      75      75
ngkpt    2 2 2
nshiftk 1
shiftk 
0.5 0.5 0.5
ecut       30
ecutsm  0.5
pawecutdg  30
pawxcdev   0
ixc      -116133
nband    104
diemac   4

# First SCF run       
#irdwfk1   1
nstep1    100
iscf1     7
tolvrs1   1.0E-20

#Refinement using tolwfr
nstep2    250
getwfk2   -1
iscf2     7
tolwfr2   1.0E-20

# Printing flags
prtden    1
prteig    0
prtwf     1
prtposcar 0
prtcif    1
