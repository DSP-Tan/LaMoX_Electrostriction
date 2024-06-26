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
  1.33115455819730E+01 -7.51504515105544E-02  3.00854596135634E-02
 -7.70774459016121E-02  1.35771483764343E+01  6.85414605504333E-01
  2.12871496100361E-02  7.12333621964792E-01  1.35681670654000E+01

             xred      8.6796011743E-01  8.7027626719E-01  8.1816149669E-01
                       3.7126100684E-01  6.2660635617E-01  1.8029679639E-01
                       1.2444079003E-01  3.3474424862E-01  6.0484236928E-01
                       6.2372966515E-01  1.6444376097E-01  3.9502795122E-01
                       1.6154268065E-01  1.2001433089E-01  1.8907785717E-01
                       6.6119715061E-01  3.8061913350E-01  8.1027971057E-01
                       8.3204872940E-01  7.0489059115E-01  2.9831484554E-01
                       3.3037845747E-01  7.9501403570E-01  7.0213785358E-01
                       3.1944794278E-01  3.0588904637E-01  3.0581271268E-01
                       8.1894833101E-01  1.9377486294E-01  6.9786457012E-01
                       6.8354328788E-01  7.8454892379E-01  9.9778345620E-02
                       1.8405156532E-01  7.1281979943E-01  9.0253835732E-01
                       9.7367184071E-01  1.9910524569E-01  3.3920562155E-01
                       4.7391718063E-01  2.9907717778E-01  6.6098553602E-01
                       4.4043857886E-02  5.7348585287E-01  3.0235747641E-01
                       5.4288302671E-01  9.2972105939E-01  6.9901422734E-01
                       3.6658190883E-01  9.6413834918E-01  2.4872447196E-01
                       1.6712165407E-01 -1.8214606225E-02  6.3389430652E-01
                       8.6886521416E-01  5.3764436575E-01  7.4784992996E-01
                       6.6773684207E-01  5.1511639775E-01  3.6625681237E-01
                       1.6489693758E-01  2.3255219220E-01  9.6093913881E-01
                       8.1050741032E-01  8.5877689689E-01  4.7313363216E-01
                       3.1240640612E-01  6.4117710784E-01  5.2662349810E-01
                       6.6115088611E-01  2.7262829329E-01  4.0351378341E-02
                       7.5342249926E-03 -8.4691884136E-02  1.4252414434E-01
                       5.1013288526E-01  5.8584219500E-01  8.5400695994E-01
 
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
