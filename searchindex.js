Search.setIndex({docnames:["CONTRIBUTORS","FAQ","Summarization","examples","extended","im2text","index","main","modules","onmt","onmt.io","onmt.modules","options/preprocess","options/train","options/translate","quickstart","ref","references","speech2text"],envversion:53,filenames:["CONTRIBUTORS.md","FAQ.md","Summarization.md","examples.rst","extended.md","im2text.md","index.rst","main.md","modules.rst","onmt.rst","onmt.io.rst","onmt.modules.rst","options/preprocess.md","options/train.md","options/translate.md","quickstart.md","ref.rst","references.md","speech2text.md"],objects:{"onmt.Loss":{LossComputeBase:[9,0,1,""]},"onmt.Loss.LossComputeBase":{compute_loss:[9,1,1,""],make_shard_state:[9,1,1,""],monolithic_compute_loss:[9,1,1,""],sharded_compute_loss:[9,1,1,""],stats:[9,1,1,""]},"onmt.Optim":{Optim:[9,0,1,""]},"onmt.Optim.Optim":{step:[9,1,1,""],update_learning_rate:[9,1,1,""]},"onmt.Statistics":{accuracy:[9,1,1,""],elapsed_time:[9,1,1,""],output:[9,1,1,""],ppl:[9,1,1,""]},"onmt.Trainer":{drop_checkpoint:[9,1,1,""],train:[9,1,1,""],validate:[9,1,1,""]},"onmt.io":{AudioDataset:[10,0,1,""],ImageDataset:[10,0,1,""],TextDataset:[10,0,1,""]},"onmt.io.AudioDataset":{sort_key:[10,1,1,""]},"onmt.io.ImageDataset":{sort_key:[10,1,1,""]},"onmt.io.TextDataset":{sort_key:[10,1,1,""]},"onmt.modules":{AudioEncoder:[11,0,1,""],Conv2Conv:[11,2,0,"-"],CopyGenerator:[11,0,1,""],CopyGeneratorLossCompute:[11,0,1,""],Embeddings:[11,0,1,""],GlobalAttention:[11,0,1,""],ImageEncoder:[11,0,1,""],MatrixTree:[11,0,1,""],MultiHeadedAttention:[11,0,1,""],SRU:[11,2,0,"-"],StackedGRU:[11,0,1,""],StackedLSTM:[11,0,1,""],TransformerDecoder:[11,0,1,""],TransformerEncoder:[11,0,1,""],WeightNorm:[11,2,0,"-"]},"onmt.modules.AudioEncoder":{forward:[11,1,1,""],load_pretrained_vectors:[11,1,1,""]},"onmt.modules.Conv2Conv":{CNNDecoder:[11,0,1,""],CNNDecoderState:[11,0,1,""],CNNEncoder:[11,0,1,""],GatedConv:[11,0,1,""],StackedCNN:[11,0,1,""],shape_transform:[11,3,1,""]},"onmt.modules.Conv2Conv.CNNDecoder":{forward:[11,1,1,""],init_decoder_state:[11,1,1,""]},"onmt.modules.Conv2Conv.CNNDecoderState":{repeat_beam_size_times:[11,1,1,""],update_state:[11,1,1,""]},"onmt.modules.Conv2Conv.CNNEncoder":{forward:[11,1,1,""]},"onmt.modules.Conv2Conv.GatedConv":{forward:[11,1,1,""]},"onmt.modules.Conv2Conv.StackedCNN":{forward:[11,1,1,""]},"onmt.modules.CopyGenerator":{forward:[11,1,1,""]},"onmt.modules.CopyGeneratorLossCompute":{compute_loss:[11,1,1,""],make_shard_state:[11,1,1,""]},"onmt.modules.Embeddings":{emb_luts:[11,4,1,""],forward:[11,1,1,""],load_pretrained_vectors:[11,1,1,""],word_lut:[11,4,1,""]},"onmt.modules.GlobalAttention":{forward:[11,1,1,""],score:[11,1,1,""]},"onmt.modules.ImageEncoder":{forward:[11,1,1,""],load_pretrained_vectors:[11,1,1,""]},"onmt.modules.MatrixTree":{forward:[11,1,1,""]},"onmt.modules.MultiHeadedAttention":{forward:[11,1,1,""]},"onmt.modules.SRU":{CheckSRU:[11,0,1,""],SRU:[11,0,1,""],SRUCell:[11,0,1,""],SRU_Compute:[11,0,1,""],check_sru_requirement:[11,3,1,""]},"onmt.modules.SRU.SRU":{forward:[11,1,1,""],set_bias:[11,1,1,""]},"onmt.modules.SRU.SRUCell":{forward:[11,1,1,""],get_dropout_mask_:[11,1,1,""],init_weight:[11,1,1,""],set_bias:[11,1,1,""]},"onmt.modules.SRU.SRU_Compute":{backward:[11,1,1,""],forward:[11,1,1,""]},"onmt.modules.StackedGRU":{forward:[11,1,1,""]},"onmt.modules.StackedLSTM":{forward:[11,1,1,""]},"onmt.modules.TransformerDecoder":{forward:[11,1,1,""]},"onmt.modules.TransformerEncoder":{forward:[11,1,1,""]},"onmt.modules.WeightNorm":{WeightNormConv2d:[11,0,1,""],WeightNormConvTranspose2d:[11,0,1,""],WeightNormLinear:[11,0,1,""],get_var_maybe_avg:[11,3,1,""],get_vars_maybe_avg:[11,3,1,""]},"onmt.modules.WeightNorm.WeightNormConv2d":{forward:[11,1,1,""],reset_parameters:[11,1,1,""]},"onmt.modules.WeightNorm.WeightNormConvTranspose2d":{forward:[11,1,1,""],reset_parameters:[11,1,1,""]},"onmt.modules.WeightNorm.WeightNormLinear":{forward:[11,1,1,""],reset_parameters:[11,1,1,""]},onmt:{Statistics:[9,0,1,""],Trainer:[9,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function","4":"py:attribute"},terms:{"04_e16":2,"100d":1,"100k":5,"10_ppl_12":2,"29_ppl_14":2,"62_e16":2,"case":2,"class":[0,9,10,11],"default":[2,3,13,15,18],"final":11,"float":11,"function":[0,9,11],"int":[9,11],"new":[0,2,3,15],"null":[3,15],"return":[0,9,11],"short":18,"true":[11,14],"try":[3,15],"void":[3,15],And:[3,4,7],For:[2,3,15],The:[1,2,3,4,5,7,11,13,15,18],Use:13,Using:[1,17],_e13:[3,4],_jh_j:11,a_j:11,abort:11,abov:[2,5],abs:16,acceler:11,accept:[3,15],access:2,account:2,accumul:[9,13],accuraci:9,achiev:2,acknowledg:6,acl:[2,7,17],act:2,action:[11,13],activation_typ:11,adadelta:13,adagrad:13,adagrad_accum:9,adam:[1,2,13],adamoptim:13,adapt:18,add:[0,3,15],adding:0,addit:[2,6,9,13],addition:[2,11],adopt:13,adpot:11,advanc:[3,15],advantag:2,aerob:[3,15],after:[2,13],alexand:7,align:[2,11],all:[11,13,18],allow:13,almost:13,along:11,alpha:14,also:[0,2,3,13,15],altern:[2,6,7],amount:2,an4_dataset:18,anh:11,ani:[0,11],antich:[3,15],api:13,apo:[3,15],appli:[13,18],approach:[2,5,17,18],apt:18,architectur:6,arg:[10,11],argument:0,around:2,articl:2,arxiv:[16,17],assert:0,assum:[2,5,18],atok:[3,4],attent:[2,6,14,17,18],attn:[9,11,13,14],attn_typ:11,audio:[9,10,12,13,14,18],audiodataset:10,audioencod:11,australia:2,australian:2,author:[7,11],avail:[11,13],b_1:11,b_2:11,back:9,backward:11,bahdanau:[2,11,13],base:[0,2,5,9,11,17,18],baselin:[2,13],bash:3,batch:[9,11,13,14],batch_siz:[1,2,5,18],batchnorm:11,beam:[2,3,6,15],beam_siz:[2,11],beat:[3,15],becaus:11,becom:2,been:[3,15,17],befor:0,behavior:9,below:[3,4],bengio:[2,17],best:14,beta1:[9,13],beta2:[9,13],beta:14,between:[2,13,17],bia:11,bias_val:11,bidir:13,bidirect:[2,11],billion:2,birch:17,bleu:[3,4],blob:11,booktitl:7,bool:11,both:[2,3,15],bptt:13,bridg:17,brnn:[2,13],built:[5,11,18],bunch:1,bureaucraci:[3,15],call:11,came:[3,15],can:[2,3,5,7,9,15],caption:5,cdot:5,chang:[0,13],channel:7,charact:[5,18],check:[0,11],check_sru_requir:11,checklist:0,checkpoint:[9,13],checksru:11,chen:17,cho:[2,17],choic:2,citat:6,cite:7,clear:0,clone:7,cloth:[3,15],cnn:[2,11,13,18],cnn_kernel_width:11,cnndecod:11,cnndecoderst:11,cnnencod:11,code:0,collabor:[3,15],com:[3,7,11,18],combin:11,command:[2,3,5,15],comment:0,commod:2,commun:0,compar:[9,11],compat:11,compil:5,complet:5,comput:[9,11],compute_loss:[9,11],concat:[11,13],concaten:13,conda:5,consid:11,consider:13,consist:[3,5,11,15],construct:11,constructor:0,contain:[3,5,15,18],content:[3,15],context:[11,13],context_length:11,continu:0,contribut:0,contributor:6,conv2conv:11,conv2d:11,conv:[11,13],converg:[2,3,15],convers:[5,18],convex:11,convmultistepattent:11,convolut:[11,18],convtranspose2d:11,copi:[2,11,13,14],copy_attn:[2,11],copygener:11,copygeneratorlosscomput:11,core:6,corpu:[2,10],corr:16,correct:9,correspond:14,coverag:[11,13,14],crayon:13,creat:[12,14],creation:9,criterion:9,csv:1,cuda:[9,13],cuda_funct:11,cur_trunc:9,current:[1,2,9,11],custom:13,d_out:11,dailymail:2,data:[1,3,4,5,6,9,13,18],data_typ:[5,9,10,18],dataset:[2,3,5,6,11,15],dcs:[3,4],debug:14,dec:[1,13],decai:[2,9,13],decay_method:1,decid:2,decod:[1,2,3,6,11,14,15,18],decoder_typ:1,decompil:5,decreas:13,deep:[5,11,18],deepspeech:18,deficit:2,defin:9,delta:5,demo:[3,5,15,18],deng:7,depend:[6,11],deprec:13,describ:[2,7,13],descript:11,dest:11,detail:[5,7],dev:18,develop:0,devic:[13,14],dict:[1,9,11,12,13,14],dict_fil:1,dictionari:[2,9,11,12,13,14],differ:[1,2,11],dilat:11,dim1:1,dim:11,dim_d:1,dimens:[2,11],dimension:2,dir:[12,14],direct:2,directli:11,directori:[5,7,12,14,18],discourag:13,distribut:13,divid:9,doc:13,docker:7,dockerfil:7,document:[0,2,5,7,18],doe:[1,9,13,14],doesn:11,doi:7,dollar:2,done:[3,4],dot:[2,11],dotprod:13,down:[3,15],download:[3,4,5,15,18],drastic:2,driven:5,drop_checkpoint:9,dropout:[1,11,13],due:[2,13],dump:14,dure:2,dynam:[12,14],dynamic_dict:2,each:[2,11,13,14],edu:[1,5,18],effect:[1,2,17],effici:[6,9],either:2,elaps:9,elapsed_tim:9,emb:11,emb_fil:[1,11],emb_lut:11,embed:[2,6,11],embedding_s:11,embeddings_to_torch:1,emnlp:2,enc:[1,13],enc_hidden:11,encod:[1,2,3,6,15,18],encoder_typ:[1,13],encoderbas:11,ensur:2,epoch:[1,2,9,13,18],epochn:13,eps:11,equal:13,error:0,escap:[3,4],evalu:[3,4,6,15],everi:[2,11,12,13],exampl:[0,1,3,6,9,10,15],exce:[2,13],except:[11,13],exist:[12,14],exp:13,experi:[2,13],experiment:13,expon:13,extend:2,extensionsk:6,extent:[3,15],fail:[2,11],fals:11,familiar:7,faq:6,fast:11,faster:[2,13],feat:13,feat_dim_expon:11,feat_merg:11,feat_padding_idx:11,feat_vec_expon:11,feat_vec_s:11,feat_vocab_s:11,feats_padding_idx:11,featur:[6,11,12,17,18],feder:[3,15],feed:[11,13],field:9,figur:2,file:[1,3,5,12,13,14,15,18],filenam:[1,13],files2roug:2,find:7,first:[0,18],fit:[3,11,15],fix:[0,11,13],flake8:0,floattensor:11,fmt:18,folder:[3,15],follow:[2,7],forc:13,force_copi:11,form:2,format:13,formula:5,fortunato:2,forward:11,found:2,four:5,fourier:18,frac:5,framework:[6,8,13],frequenc:12,from:[1,2,3,5,9,11,13,15,18],full:11,gap:17,gate:13,gatedconv:11,gener:[1,2,6,9,11,12,14,18],get:[1,2,5,18],get_dropout_mask_:11,get_var_maybe_avg:11,get_vars_maybe_avg:11,giga:2,giga_sgd3:2,giga_sgd3_512:2,giga_sgd3_512_acc_51:2,git:[7,18],github:[3,7,11,18],gitter:7,give:[13,14],given:[5,18],global:[11,13],global_attent:2,globalattent:[0,11],glove:6,glove_dir:1,goal:5,going:[3,15],gone:13,good:13,googl:[1,14,17],gpu:[2,3,4,5,6,14,15,18],gpuid:[1,2,3,4,5,13,15,18],grad:13,grad_h:11,grad_last:11,gradient:[2,9,13],gram:2,group:[3,11,15],guillaum:7,gym:[3,15],h_1:11,h_2:11,h_3:11,h_j:11,h_n:11,h_s:11,h_t:11,had:14,haddow:17,halv:2,ham:[12,14,18],harvard:[5,18],harvardnlp:3,has:[2,3,13,15,17],have:[2,3,13,15],head:[3,6,15],head_count:11,help:[3,7,15],henc:5,here:2,hidden:[3,11,13,15],hidden_s:11,higher:[13,14],highest:[2,14],hit:9,host:13,how:[2,6,7],howev:2,html:[3,4],http:[1,3,4,5,7,11,13,16,18],human:17,hyperparamet:1,iclr:2,identifi:14,im2latex:5,im2text:5,im2text_smal:5,imag:[6,10,11,12,14],image0_path:5,image1_path:5,image2_path:5,imagedataset:10,imageencod:11,img:[5,9,10,12,13,14],impact:2,implement:[2,3,9,11,15],improv:[9,17],in_channel:11,in_featur:11,includ:[0,7,13],incorpor:13,increas:2,index:11,infer:[5,6],info:[9,11],inform:14,inherit:9,init:[11,13],init_decoder_st:11,init_scal:11,init_weight:11,initi:[1,2,6,11],inproceed:7,input:[2,9,11,12,13,14,17],input_s:11,inspir:17,instal:[5,6,18],instead:2,instruct:13,instructor:[3,15],integr:0,interfac:[9,11],interv:13,introduc:2,italian:[3,15],iter:9,its:[0,9],jaitli:2,jean:[7,17],jointli:2,june:2,keep:12,kei:11,kera:13,kernel:13,kernel_s:11,kerra:13,kill:[3,15],kim:7,klein:7,klingner:17,kwarg:[9,10,11],label0_token0:[5,18],label0_token1:[5,18],label0_tokenn0:[5,18],label1_token0:[5,18],label1_token1:[5,18],label1_tokenn1:[5,18],label2_token0:[5,18],label2_token1:[5,18],label2_tokenn2:[5,18],label:[5,18],laid:[3,15],lambda:13,lapata:16,larg:[2,17],larger:[3,15],last:9,latex:[5,18],layer:[1,2,3,11,13,15],learn:[2,5,9,11,13,16,18],learning_r:[1,5,18],learning_rate_decai:18,legisl:[3,15],len:11,length:[2,9,11,12,14],leverag:9,librari:7,librosa:18,libsox:18,like:[1,2,5,18],limit:9,line:[3,5,14,15,18],linear:11,linguist:17,link:5,list:[0,11,13,17],literatur:13,liu:[2,16],ll17:[11,16],load:13,load_pretrained_vector:11,log:[2,6,9],longer:[2,14],longtensor:11,look:[2,5,7,18],lookup:14,loss:[6,8,11],losscomputebas:9,love:0,low:[3,4],lower:[3,4,12],lowercas:12,lowest:2,lr_decai:9,lrb:2,lstm:[2,3,5,11,13,15,18],luong:[2,11,13,17],macherei:17,machin:[2,7,17],made:[3,15],mai:13,main:[3,7,15],make:[0,9],make_shard_st:[9,11],man:[2,17],mani:12,map:11,margin:11,mark:[11,13],markup:5,mask:11,mask_h:11,master:[3,11,15],match:[9,11],math:5,matrix:[11,13],matrixtre:11,max:[13,14],max_grad_norm:[1,2,5,9,18],maximum:[2,12,13,14],mean:[2,3,13,15],mechan:2,memisev:17,memori:13,mention:2,merg:[11,13],method:[9,11,13],million:[3,15],mimic:1,min:12,minibatch:11,minim:[2,3,15],mirella:16,mirror:13,mkdir:[1,3,4],mlp:[2,11,13],mmt_task1_test2016:[3,4],model:[2,3,4,5,6,8,11,18],model_acc_x_ppl_x_e13:[5,18],model_dim:11,model_epochx_ppl:[3,15],model_typ:[5,18],modifi:[0,1],modul:[6,9],mondai:2,monolith:9,monolithic_compute_loss:9,more:[3,5,13,15],mose:[3,4],most:2,much:13,multi30k:[3,4],multi30k_model:[3,4],multi30k_model_:[3,4],multi:[3,4,6],multiheadedattent:11,multimod:[3,4],must:[9,11],mydata:1,n_batch:9,n_correct:9,n_in:11,n_out:11,n_word:9,name:[0,13],namespac:11,narrow:2,nation:[3,15],necessari:13,need:[1,2,9,11,13],net:2,network:[2,11,18],neural:[2,7,11,17,18],next:9,nfeat:11,nip:2,nlp:1,nmt:14,nmtmodel:9,no_sent_tag:2,noam:1,non:[11,13],none:[9,11],nopad:11,norm:[2,9,13],normal:[11,13],norouzi:17,notabl:2,notag_sgd3:2,notag_try3_acc_49:2,note:[2,3,15],now:[3,15],num_lay:11,number:[2,9,11,13],nvidia:7,object:9,off:2,often:2,onc:2,one2:1,one:[3,5,9,14,15,18],onli:2,onmt:[9,10,11],open:7,opennmt:[0,1,2,5,6,7,8,17,18],opt:[9,11],optic:5,optim:[1,6,8],option:[1,2,6,9,11],option_str:11,org:[3,4,7,13,16],origin:13,other:[2,13],othereis:11,otherwis:13,our:[1,7,11,18],out:[2,9],out_channel:11,out_featur:11,output:[1,2,3,4,5,9,11,12,13,14,15,18],output_fil:1,output_pad:11,over:13,overlin:11,overview:6,own:[9,11],p17:7,pad:11,pair:2,paper:[0,5,11,13,17],parallel:[2,3,13,15],param:[9,11,13],param_init:1,paramet:[2,9,11,13,14],parameter:11,parliament:[3,15],pars:11,part:2,pass:11,past:13,path:[5,12,13,14,18],penalti:14,per:[2,3,5,14,15,18],percentag:9,perf:9,perform:2,perl:[3,4],perplex:[2,9,13],person:[3,15],pham:[2,17],phrase:14,pilat:[3,15],pillow:5,pip:[5,7,18],pleas:[0,7],point:2,pointer:2,polyak_decai:11,portal:7,posit:[11,13],position_encod:[1,11],postur:[3,15],ppl:[9,13],pre:[1,13],pre_word_vecs_dec:1,pre_word_vecs_enc:1,pred:[3,4,5,14,15,18],predict:[3,9,11,14,15],prefix:[12,13],prepar:[1,3,4,12],preprint:17,preprocess:[1,3,4,5,6,13,18],prerog:[3,15],pretrain:[6,13],previous:2,price:2,print:[13,14],probabl:[11,13],problem:5,proc:7,procedur:2,produc:18,project:[0,7,11],propag:9,provid:[5,7,14,18],provis:[3,15],prune:6,pull_request_chk:0,purpos:[3,15],pyroug:2,python:[1,2,3,4,5,13,15,18],pytorch:[0,1,7,11,18],quarter:2,queri:11,quest:[3,4],quick:6,quickstart:[3,6,7],quit:[3,15],quot:[3,15],rais:11,random:[6,13],rang:9,range_:[9,11],rare:17,rate:[2,6,9,12,14,18],raw:[11,18],readi:7,readm:13,recent:13,recognit:5,recommend:13,record:2,recurr:11,reduc:2,refer:[0,6],refus:[3,15],rel:[5,11,13,18],releas:2,renorm:[2,13],reparameter:11,repeat:[2,11],repeat_beam_size_tim:11,replac:[2,14],replace_unk:[2,3,4,15],replic:2,report:[7,12,13],report_func:9,repositori:7,represent:[11,16,18],reproduc:13,requir:[3,7,15],resduial:11,research:7,reset_paramet:11,resourc:6,respons:9,resturn:9,result:13,resum:9,return_hidden:11,rip:[3,15],rnn:[11,13],rnn_dropout:11,rnn_size:[1,2,11],root:7,roug:2,rrb:2,run:[0,1,2,3,9,13,14,15],rush:7,safeti:2,sai:[3,15],same:[0,2,11],sampl:[5,12,13,14,18],sample_r:[11,18],save:[1,3,9,12,13,15],save_data:[1,2,3,4,5,15,18],save_model:[1,2,3,4,5,15,18],schuster:17,score:[2,9,11,14],script:[0,1,3,4],sea:[5,18],search:[2,3,15],second:[12,13,14,18],section:2,sed:[3,4],see:[0,2,5,11,13],seed:[2,12,13],seemingli:13,select:13,self:11,send:[0,13],senellart:7,senior:[3,15],sennrich:17,sensit:1,sent:[2,3,14],sentenc:[2,3,4,12,14,15],separ:[3,15],seq:12,seqlength:11,sequenc:[9,11,12,13,14],serial:1,server:13,set:[1,2,13,14],set_bia:11,setup:1,sgd3_out:2,sgd:[2,13],shall:[5,18],shape:11,shape_transform:11,shard:9,shard_siz:9,sharded_compute_loss:9,share:[2,12,13,14],share_embed:2,share_vocab:2,sharpli:2,shef:[3,4],should:[2,3,15],show:2,shrunk:2,shuffl:12,side:[2,13],similar:2,simpl:[3,11,15],sin:[11,13],sinc:[2,9],size:[0,2,9,10,11,12,13,14,18],sleep:[3,15],slight:2,slightli:[1,2],small:[3,15],soar:2,softmax:11,soldier:[3,15],some:[3,15],sort:10,sort_kei:10,sourc:[2,3,5,7,9,10,11,12,13,14,15,18],sox:18,space:[3,15],specif:13,specifi:13,spectrogram:[12,13,14,18],speech0_path:18,speech1_path:18,speech2_path:18,speech:6,split:2,src:[1,2,3,4,5,11,12,13,14,15,18],src_dict:11,src_dir:[5,18],src_len:11,src_map:11,src_seq_length:2,src_seq_length_trunc:2,sru:6,sru_comput:11,srucel:11,stack:[11,13],stackedcnn:11,stackedgru:11,stackedlstm:11,stanford:1,start:[6,9,13],start_checkpoint_at:2,start_decay_at:9,stat:[9,13],state:[9,11,13],statist:9,statmt:[3,4],statu:12,stdout:9,step:[3,4,6,9,13],stft:18,store:[5,18],str:11,strategi:9,stretch:[3,15],stride:[11,12,14,18],string:[9,11],strip:2,structur:[6,16],style:[0,13],subclass:9,subword:17,sudo:18,suggest:13,sum:[11,13],sum_:11,summar:[3,6,15],summari:3,superclass:0,support:[6,11,13],system:[1,5,13,17,18],tabl:14,tag:2,take:[0,3,5,7,11,13,15],taolei87:11,tar:[3,4,5,18],target:[2,3,9,11,12,14,15,17],task:[3,4],technic:[5,7],tensor:[0,9,11],tensorflow:13,tensors2:1,term:[3,15],terribl:[3,15],test:[0,2,3,4,5,15],text:[3,6,9,10,11,12,13,14,16],textdataset:10,tgt:[1,2,3,4,5,12,13,14,15,18],tgt_dict:11,tgt_len:11,tgt_seq_length:2,tgt_seq_length_trunc:2,tgt_vocab:[9,11],tgz:[5,18],than:[2,3,15],thei:[3,15],them:[3,15],theorem:11,thi:[0,2,3,4,5,7,9,11,12,13,15,17,18],through:[9,11],throughout:[5,18],time:[9,11,13,18],titl:[2,7],todo:11,toi:[5,18],token:[2,3,4,5,11,14,15,18],told:[3,15],tool:[0,1,3,4],toolkit:7,top:[5,18],torch:11,torchaudio:18,torchvis:5,total:[2,9],train:[1,3,4,5,6,7,9,11,12,18],train_it:9,train_loss:9,train_src:[1,2,3,4,5,15,18],train_tgt:[1,2,3,4,5,15,18],trainer:[3,6,8,15],tranform:11,transfom:6,transform:[6,11,13,18],transformerdecod:11,transformerencod:11,translat:[2,3,5,6,7,17,18],travi:0,tree:11,trunc:[9,12],trunc_siz:9,truncat:[2,9,12,13],turn:[2,11],tutori:7,two:[3,15],txt:[1,2,3,5,7,14,15,18],type:[6,9,11,12,14,18],typic:[2,13],u_a:11,uniform:13,unit:[3,11,15,17],unittest:0,unk:[2,14],unzip:1,updat:[9,13],update_learning_r:9,update_st:11,url:[7,16],usag:1,use:[2,3,6,7,11,13,15,18],use_relu:11,use_tanh:11,used:[2,3,5,11,13,15],user:9,uses:[3,4,13],using:[1,2,7,10,11],usual:[3,15],v_a:11,val:[2,3,4,5,9,15,18],valid:[1,2,3,4,9,11,12,13,15],valid_it:9,valid_loss:9,valid_src:[1,2,3,4,5,15,18],valid_stat:9,valid_tgt:[1,2,3,4,5,15,18],valu:[1,2,11,13],var_nam:11,varieti:5,vec:13,vector:[11,13],verbos:[1,2,3,4,5,14,15,18],veri:[1,2,17],version:1,via:13,vinyal:2,visual:5,vocab:[1,6,14],vocabulari:[1,9,12,14,17],w_1:11,w_2:11,w_a:11,warmup:13,warmup_step:1,weight:[11,13,14],weightnorm:11,weightnormconv2d:11,weightnormconvtranspose2d:11,weightnormlinear:11,well:13,wget:[1,3,4,5,18],what:5,when:[0,2,7,11,13],where:[11,13],wherea:13,whether:2,which:[2,3,11,13,15],whole:9,whose:[3,15],width:[11,13],window:[12,13,14,18],window_s:[11,18],window_strid:18,without:[2,13],wmt16:[3,4],wmt16_files_mmt:[3,4],wmt17_files_mmt:[3,4],wmt:[3,4],word:[1,2,11,12,13,14,17],word_lut:11,word_padding_idx:11,word_vec_s:[1,2,11],word_vocab_s:11,work:[3,5,7,13,15,18],workflow:7,wors:2,would:13,wrapper:2,write:9,www:[3,4,13],x_var:11,yang:16,year:7,yet:11,yield:2,ylhsieh:1,yml:0,yoon:7,you:[3,5,6,7,11,13,15],your:0,yourself:7,yuntian:7,zip:1,zxf:[5,18]},titles:["Contributors","FAQ","Example: Summarization","&lt;no title&gt;","Example: Translation","Example: Image to Text","&lt;no title&gt;","Overview","onmt","OpenNMT Framework","OpenNMT Data","OpenNMT Modules","Options: preprocess.py:","Options: train.py:","Options: translate.py:","Quickstart","References","&lt;no title&gt;","Example: Speech to Text"],titleterms:{acknowledg:18,addit:7,altern:11,architectur:11,attent:[11,13],beam:14,citat:7,cnndm:2,contributor:0,core:11,data:[2,10,12,14,15],dataset:10,decod:13,depend:[5,18],effici:14,embed:[1,13],encod:[11,13],evalu:2,exampl:[2,4,5,18],extensionsk:11,faq:1,featur:13,framework:9,gener:13,gigaword:2,glove:1,gpu:1,head:11,how:1,imag:5,infer:2,initi:13,instal:7,log:[12,13,14],loss:9,model:[1,9,13,14,15],modul:11,multi:[1,11],onmt:8,opennmt:[9,10,11],optim:[9,13],option:[5,12,13,14,18],overview:7,preprocess:[2,12,15],pretrain:1,prune:12,quick:[5,18],quickstart:15,random:12,rate:13,refer:[2,16],resourc:7,speech:[12,13,14,18],sru:11,start:[5,18],step:15,structur:11,summar:2,support:1,text:[5,18],train:[2,13,15],trainer:9,transfom:11,transform:1,translat:[4,14,15],type:13,use:1,vocab:12,you:1}})