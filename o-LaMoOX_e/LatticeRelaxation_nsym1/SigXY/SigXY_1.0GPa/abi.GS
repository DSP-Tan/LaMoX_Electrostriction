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
  1.36137908568654E+01  3.83182892548095E-01 -5.63243707354305E-01
  3.80086155803802E-01  1.32665616673001E+01  7.69814346260443E-02
 -5.60982248133766E-01  5.82282611244256E-02  1.36137007651094E+01

             xred      8.8159637581E-01  8.6770863936E-01  8.2546626051E-01
                       3.3746984909E-01  6.1869502683E-01  8.8544342330E-02
                       1.0983129085E-01  3.7707600514E-01  6.5762623349E-01
                       6.8942194546E-01  1.5425515864E-01  3.5327550550E-01
                       2.0386300163E-01  1.6870294848E-01  1.9641789231E-01
                       6.9127893372E-01  3.3409685875E-01  8.8316082241E-01
                       8.0201080113E-01  6.7351881063E-01  2.9336057825E-01
                       3.0974592035E-01  8.4273416618E-01  6.1750534354E-01
                       3.9227782405E-01  3.1937313762E-01  2.7010081265E-01
                       7.6922785029E-01  1.8042644500E-01  6.8536297060E-01
                       5.9682049868E-01  8.1184016957E-01  2.0122699923E-01
                       1.6984646908E-01  6.7780985971E-01  7.9519800345E-01
                       1.0304952844E+00  1.8385352653E-01  3.5561314183E-01
                       4.4920878403E-01  3.6772886588E-01  8.1570199454E-01
                      -2.1177731241E-02  6.9182587966E-01  1.3959675897E-01
                       5.1832084654E-01  8.1076409839E-01  7.6287021316E-01
                       2.2566353793E-01  9.4871925221E-01  8.4040649483E-02
                       1.4404804616E-01  2.7818038300E-02  7.0195027708E-01
                       8.3094361977E-01  5.1964913951E-01  8.0408991495E-01
                       8.2076468008E-01  4.6689377554E-01  4.4361341434E-01
                       1.2212575597E-01  3.2348999126E-01  1.0059503439E+00
                       8.5247901401E-01  8.4452329672E-01  4.7531731465E-01
                       2.6323094031E-01  6.4448883172E-01  4.6104393979E-01
                       7.6364367094E-01  1.1832237464E-01  3.1900888890E-02
                       6.6954052548E-01  4.6869040282E-01  1.1120778284E+00
                       3.7732226554E-01  1.0069953009E+00  4.3898755576E-01
 
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
