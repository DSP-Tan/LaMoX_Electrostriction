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
  1.31807947462050E+01 -1.07553407234877E-03  5.25501999932341E-03
 -8.23939858320037E-04  1.36161737199493E+01  7.02716050708237E-01
  5.21332189283503E-03  7.29348973355463E-01  1.36172869476712E+01

             xred      8.6835835595E-01  8.7035505589E-01  8.1903315437E-01
                       3.6876942072E-01  6.2817873732E-01  1.8023551410E-01
                       1.2455918148E-01  3.3475851308E-01  6.0445167900E-01
                       6.2419954372E-01  1.6503989061E-01  3.9584864743E-01
                       1.6190518539E-01  1.1981084352E-01  1.8927817912E-01
                       6.6232080870E-01  3.8017885109E-01  8.1073886562E-01
                       8.3081015706E-01  7.0503004293E-01  2.9853719597E-01
                       3.3093582761E-01  7.9432972068E-01  7.0137941671E-01
                       3.1988533230E-01  3.0645037510E-01  3.0343677165E-01
                       8.1995557670E-01  1.9335459535E-01  6.9829273513E-01
                       6.8258442867E-01  7.8473323617E-01  9.8966395496E-02
                       1.8243068917E-01  7.1381089427E-01  9.0090609829E-01
                       9.7263553132E-01  1.9944949424E-01  3.3914446459E-01
                       4.7271753706E-01  3.0039159260E-01  6.6174688198E-01
                       4.3477326225E-02  5.7000983087E-01  3.0133969555E-01
                       5.4329349340E-01  9.3012055553E-01  6.9788001655E-01
                       3.7009776781E-01  9.6449797404E-01  2.5108885906E-01
                       1.6553201498E-01 -1.7792872015E-02  6.3399900978E-01
                       8.7030863715E-01  5.3590635322E-01  7.4773619841E-01
                       6.6575492222E-01  5.1717666289E-01  3.6691709366E-01
                       1.6391438158E-01  2.3022497511E-01  9.6116739316E-01
                       8.1149675409E-01  8.5792189004E-01  4.7321562391E-01
                       3.1142103490E-01  6.4243864517E-01  5.2593511074E-01
                       6.6323578641E-01  2.7258629270E-01  4.0003290670E-02
                       9.4028585498E-03 -8.5693357067E-02  1.4489340633E-01
                       5.0999744685E-01  5.8673120664E-01  8.5382830273E-01
 
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
